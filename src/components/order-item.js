import { currencyFormatter } from "../helpers/currency-formatter";
import Image from "next/image";

export function OrderItem({ order }) {
  const totalPrice = currencyFormatter.format(order?.total_price);
  const unityPrice = currencyFormatter.format(order?.price);

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 w-full mb-4">
        <Image
          className="rounded object-cover max-h-12"
          alt="order image"
          src="/food.jpg"
          height={48}
          width={48}
        />

        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between items-center w-full">
            <h4>{order?.product_name}</h4>
            <a>view</a>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>{unityPrice} / {order?.track_type}</span>
            <h4>{totalPrice}</h4>
          </div>
        </div>
      </div>

      <hr className="h-px w-full" />
    </div>
  );
}
