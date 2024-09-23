"use client";

import ApiCenter from "@/api/ApiCenter";
import Context from "@/context";
import { setUserDetails } from "@/redux/userSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const Layout = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const [productQuantityInCart, setProductQuantityInCart] = useState(0)
  
    const fetchUserDetails = async () => {
      const dataResponse = await axios({
        method: ApiCenter.current_user.method,
        withCredentials: true,
        url: ApiCenter.current_user.url,
      });
      const dataApi = dataResponse.data;
      if (dataApi.success) {
        dispatch(setUserDetails(dataApi))
      }
      // console.log(dataApi, "user-data");
    }
  
    const fetchUserAddToCart = async () =>{
      const response = await axios({
        method: ApiCenter.countProductInCart.method,
        withCredentials: true,
        url: ApiCenter.countProductInCart.url,
      });
  
      const dataResponse = await response.data;
      console.log(dataResponse, "user-cart");
      setProductQuantityInCart(dataResponse?.data?.count);
    }
  
  
    useEffect(() => {
      fetchUserDetails();
      fetchUserAddToCart();
    }, [])
    return (
        <Context.Provider value={{ fetchUserAddToCart, productQuantityInCart, fetchUserDetails }}>
            {children}
        </Context.Provider>
    );
};

export default Layout;
