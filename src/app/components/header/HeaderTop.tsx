"use client";

import Link from "next/link";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Context from "@/context";
import { AppDispatch, RootState } from "@/redux/store";
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import SideDrawer from "../Drawer/Drawer";
import { createMenuItems } from "../Menu";

const HeaderTop = () => {

  const user = useSelector((state: RootState) => state?.user?.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const context = useContext(Context);

  const items = createMenuItems(user, dispatch, router);

  const menuProps = {
    items,
  };
  

  return (
    <div className="max-w-full z-10 top-0 h-16 bg-primary/40 shadow-md md:px-8">
      <div className="max-w-full flex items-center h-full mx-auto md:px-4 md:flex-row xs:px-3">
        <div className="md:hidden mr-auto mt-1 xs:ml-2">
          <SideDrawer />
        </div>
        <Link href={"/"} className="flex items-center flex-row justify-between" >
          <div className="">
            <Image src={Logo} alt="logo" className="w-12" />
          </div>
          <h4 className="font-semibold text-amber-600 hover:text-amber-800">TimmyTechStore</h4>
        </Link>
        <div className="flex items-center justify-between ml-auto gap-10">
          <div className="relative group items-center justify-center gap-4 xs:hidden md:flex">
            <input type="text" name="search" id="search" placeholder="Search..." className="max-w-full sm:w-[200px] group-hover:w-[500px] transition-all duration-300 rounded-lg border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800" />
            <IoMdSearch className="absolute text-gray-500 -translate-y-1/2 group-hover:text-primary top-1/2 right-3" />
          </div>
          <div>
            {user && (
              <button className="flex items-center gap-3 px-4 py-2 text-white transition-all duration-200 rounded-2xl bg-gradient-to-r from-primary to-secondary group">
                <Link href={"/cart"} className="relative text-xl flex items-center justify-center">
                  <span className="hidden mr-3 duration-200 transition-all group-hover:block text-sm">Cart</span>
                  <span className="cursor-pointer text-xl text-white"><FaShoppingCart /></span>
                  <div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-500 rounded-full -top-2 -right-3">
                    <p className="text-xs">{context?.productQuantityInCart}</p>
                  </div>
                </Link>
              </button>
            )}
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
