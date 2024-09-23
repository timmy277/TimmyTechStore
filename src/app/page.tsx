import Link from "next/link";
import { ToastContainer } from "react-toastify";
import CategoryList from "./components/CategoryList";
import HorizontalCardProduct from "./components/Products/HorizontalCardProduct";
import BannerProduct from "./components/Products/BannerProduct";

export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CategoryList />
        <BannerProduct />
        <HorizontalCardProduct category={"Mouse"} heading={"New Arrivals"} />
        <HorizontalCardProduct category={"airpods"} heading={"New Airpods"} />
        <Link href="/auth/SignUp">SignUp</Link>
        <Link href="/auth/SignIn">SignIn</Link>
      </main>
    </div>
  );
}
