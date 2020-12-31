import Slider from "../Components/Slider/Slider";
import OrderProcessList from "../Components/OrderProcess/OrderProcessList";
import ProductItem from "../Components/Product/Product_Item";
import ProductList from "../Components/Product/Product_List";

export default function Home() {
  return (
    <div className="home-page">
      <Slider />
      <OrderProcessList />
      <ProductList />
    </div>
  );
}
