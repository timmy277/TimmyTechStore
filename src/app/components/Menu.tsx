import { MenuProps } from 'antd';
import { BsPersonVcard } from "react-icons/bs";
import { LuShoppingBasket } from "react-icons/lu";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import Link from "next/link";
import { notification } from 'antd';
import axios from 'axios';
import ApiCenter from "@/api/ApiCenter";
import { AppDispatch } from "@/redux/store";
import { setUserDetails } from "@/redux/userSlice";
import { NextRouter } from 'next/router';


// Hàm xử lý logout
export const handleLogOut = async (dispatch: AppDispatch, router: NextRouter) => {
  const fetchData = await axios({
    method: ApiCenter.logOut.method,
    url: ApiCenter.logOut.url,
    withCredentials: true,
  });
  const dataApi = await fetchData.data;
  if (dataApi.success) {
    notification.success({
      message: 'Success',
      description: dataApi.message,
    });
    dispatch(setUserDetails(null));
    router.push("/auth/SignIn");
  }
  if (dataApi.error) {
    notification.error({
      message: 'Error',
      description: dataApi.message,
    });
  }
};

// Hàm tạo menu items
export const createMenuItems = (user: unknown, dispatch: AppDispatch, router: NextRouter): MenuProps['items'] => {
  return [
    {
      label: 'Profile',
      key: '1',
      icon: <BsPersonVcard />,
    },
    {
      label: <Link href="/cart" className="text-left">Cart</Link>,
      key: '2',
      icon: <LuShoppingBasket />,
    },
    {
      label: <Link href="/AllOrder" className="text-left">Order</Link>,
      key: '3',
      icon: <LuShoppingBasket />,
      danger: true,
    },
    {
      label: user ? (
        <button onClick={() => handleLogOut(dispatch, router)} className="text-left">Log Out</button>
      ) : (
        <Link href="/auth/SignIn" className="text-left">Sign In</Link>
      ),
      key: '4',
      icon: user ? <AiOutlineLogout /> : <AiOutlineLogin />,
    },
  ];
};
