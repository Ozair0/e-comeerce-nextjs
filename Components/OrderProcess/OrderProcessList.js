import OrderProcessItems from "./OrderProcessItems";

export default function OrderProcessList() {
  return (
    <div className="OrderProcess">
      <OrderProcessItems name="Card 1" />
      <OrderProcessItems name="Card 2" />
      <OrderProcessItems name="Card 3" />
      <OrderProcessItems name="Card 4" />
    </div>
  );
}
