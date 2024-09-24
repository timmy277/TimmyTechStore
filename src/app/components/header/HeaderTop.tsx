"use client"

import Link from "next/link";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import {FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useContext } from "react";
import axios from "axios";
import ApiCenter from "@/api/ApiCenter";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Context from "@/context";
import { setUserDetails } from "@/redux/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { BsPersonVcard } from "react-icons/bs";
import { LuShoppingBasket } from "react-icons/lu";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

const HeaderTop = () => {

  const user = useSelector((state: RootState) => state?.user?.user?.data)
  const dispatch = useDispatch<AppDispatch>();

  // const [displayMenu, setDisplayMenu] = useState(false);
  const router = useRouter();
  const context = useContext(Context);

  console.log(user, "user-dataaaaaa")

  const handleLogOut = async () => {
    const fetchData = await axios({
      method: ApiCenter.logOut.method,
      url: ApiCenter.logOut.url,
      withCredentials: true,
    });

    const data = await fetchData.data;
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      router.push("/auth/SignIn");
    }
    if (data.error) {
      toast.error(data.message);
    }
  }
  // console.log(user, "user")

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
  };

  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: '1',
      icon: <BsPersonVcard />,
    },
    {
      label: 'Cart',
      key: '2',
      icon: <LuShoppingBasket />,
    },
    {
      label: <Link href="/success" className="text-left">Order</Link>,
      key: '3',
      icon: <LuShoppingBasket />,
      danger: true,
    },
    {
      label: user?._id ? (
        <button onClick={handleLogOut} className="text-left">Log Out</button>
      ) : (
        <Link href="/auth/SignIn" className="text-left">Sign In</Link>
      ),
      key: '4',
      icon: user?._id ? <AiOutlineLogout /> : <AiOutlineLogin />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="max-w-full z-10 top-0 h-16 bg-primary/40 shadow-md px-8">
      <div className="container flex items-center h-full px-4 mx-auto">
        <Link href={"/"} className="flex items-center flex-row justify-between" >
          <div className="">
            <Image src={Logo} alt="logo" className="w-12" />
          </div>
          <h1 className="text-xl font-semibold text-amber-600 hover:text-amber-800">TimmyTechStore</h1>
        </Link>
        <div className="flex items-center justify-between ml-auto gap-10">
          <div className="relative group items-center justify-center gap-4">
            <input type="text" name="search" id="search" placeholder="Search..." className="max-w-full sm:w-[200px] group-hover:w-[500px] transition-all duration-300 rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
            />
            <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
          </div>
          <div>
            {
              user?._id && (
                <button className="flex items-center gap-3 px-4 py-2 text-white transition-all duration-200 rounded-2xl bg-gradient-to-r from-primary to-secondary group"
                >
                  <Link href={"/cart"} className="relative text-2xl flex items-center justify-center">
                    <span className="hidden mr-3 duration-200 transition-all group-hover:block text-sm">Cart</span>
                    <span className="cursor-pointer text-white"><FaShoppingCart /></span>
                    <div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-500 rounded-full -top-2 -right-3 ">
                      <p className="text-sm">{context?.productQuantityInCart}</p>
                    </div>
                  </Link>
                </button>
              )
            }
          </div>
          <Space wrap className="bg-gradient-to-r from-primary to-secondary py-2 px-4 text-white rounded-lg">
            <Dropdown menu={menuProps} placement="bottom">
              <UserOutlined />
            </Dropdown>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
