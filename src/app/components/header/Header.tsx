"use client"

import Link from "next/link";
import Logo from "../../../assets/logo.png";
import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import axios from "axios";
import ApiCenter from "@/api/ApiCenter";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Context from "@/context";
import { setUserDetails } from "@/redux/userSlice";
import { AppDispatch, RootState } from "@/redux/store";


interface User {
  _id: string;
  email: string;
  password: string;
  
}

const Header = () => {

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

  return (
    <header className="w-full sticky z-10 top-0 h-16 bg-white shadow-md">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <div className="h-9 w-9">
          <Link href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="items-center justify-between hidden w-full max-w-sm pl-2 border rounded-full lg:flex focus-within:shadow-md">
          <input type="text" name="search" id="search" placeholder="Search product here..." className="w-full rounded-l-full outline-none"
          // onChange={handleSearch} value={search}
          />
          <div className="text-lg bg-red-500 min-w-[50px] h-6 flex items-center justify-center rounded-r-full ">
            <FaSearch />
          </div>
        </div>
        {
          user?._id && (
            <Link href={"/cart"} className="relative text-3xl">
              <span><FaShoppingCart /></span>
              <div className="absolute flex items-center justify-center w-5 h-5 p-1 text-white bg-red-500 rounded-full -top-2 -right-3 ">
                <p className="text-sm">{context?.productQuantityInCart}</p>
              </div>
            </Link>
          )
        }
        <div className="">
          {
            user?._id ? (
              <button onClick={handleLogOut} className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700" >Log Out</button>
            ) : (
              <Link href={"/auth/SignIn"} className="px-3 py-1 text-white bg-red-600 rounded-full hover:bg-red-700">Sign In</Link>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
