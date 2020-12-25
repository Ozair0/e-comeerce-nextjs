import Slider from "../Components/Slider/Slider";
import OrderProcessList from "../Components/OrderProcess/OrderProcessList";

export default function Home() {
  return (
    <div className="home-page">
      <Slider />
      <OrderProcessList />
    </div>
  );
}
