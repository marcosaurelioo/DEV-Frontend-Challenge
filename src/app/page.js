import orders from "../api/orders.json";
export default function Home() {
  console.log("orders", orders);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-Grey200">
      <h1>Orders</h1>
    </main>
  );
}
