import Link from "next/link";
import { ToastContainer } from "react-toastify";
import CategoryList from "./components/CategoryList";
import BannerProduct from "./components/Products/BannerProduct";
import SideDrawer from "./components/Drawer/Drawer";
import CardProduct from "./components/Products/CardProduct";

export default function Home() {
  return (

    <div className="">
      <main className="">
        <CategoryList />
        <BannerProduct />
        <CardProduct category={"Mouse"} heading={"New Arrivals"} />
        <CardProduct category={"airpods"} heading={"New Airpods"} />
        <SideDrawer />
      </main>
    </div>
  );
}
