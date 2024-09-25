import CategoryList from "./components/CategoryList";
import BannerProduct from "./product/BannerProduct";
import CardProduct from "./product/CardProduct";

export default function Home() {
  return (

    <div className="">
      <main className="">
        <CategoryList />
        <BannerProduct />
        <CardProduct category={"mobiles"} heading={"New Arrivals"} />
        <CardProduct category={"airpods"} heading={"New Airpods"} />
      </main>
    </div>
  );
}
