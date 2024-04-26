"use client";

import { useState } from "react";
import Image from "next/image";
import moment from "moment";

import { useFetchOrders } from "../hooks/useFetchOrders";

import { OrderDescriptions } from "../components/order-descriptions";
import { OrderPrice } from "../components/order-price";
import { OrderItem } from "../components/order-item";

export default function Home() {
  const [noteValue, setNoteValue] = useState("");
  const { data } = useFetchOrders();

  const handleNoteSubmit = async () => {
    try {
      await fetch("https://vop4f76uc3.execute-api.us-east-1.amazonaws.com/", {
        method: "PATCH",
        body: JSON.stringify({
          id: data.id,
          customer_note: noteValue,
        }),
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="flex justify-center min-h-screen bg-Grey200 bg-particles-texture">
      <div className="w-full h-full sm:max-w-xl sm:py-10 py-6">
        <div className="flex gap-2 pb-6 sm:ml-0 ml-2">
          <Image alt="chevron icon" src="/chevron.svg" width={6} height={20} />
          <span>Back to orders</span>
        </div>

        <div className="bg-white w-full h-full sm:border border-t border-Grey1000 sm:rounded-xl shadow-custom-shadow p-4">
          <div>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex justify-between items-center gap-2">
                <h1>
                  Order {data?.id} · {data?.supplier?.business_name}
                </h1>
                <div className="bg-Green100 w-14 rounded-lg text-center">
                  <span className="text-Green800">
                    {data?.status?.toLowerCase()}
                  </span>
                </div>
              </div>
              <span>
                Placed {moment(data.opened_at).format("dddd, MMMM D YYYY")}
              </span>
            </div>

            <hr className="border-dashed" />

            <div className="flex flex-col gap-3 max-h-80 overflow-y-auto pr-2 mt-4">
              {data.orders.map((order) => <OrderItem order={order} key={order.id} /> )}
            </div>

            <OrderPrice purchaseValues={data.purchase_values} />
            <OrderDescriptions data={data} />

            <hr className="border-dashed" />

            <div className="flex flex-col gap-3 mt-2">
              <span>Send another note</span>

              <textarea
                className="min-h-32 border border-Grey300 rounded p-4 text-black"
                onChange={(e) => setNoteValue(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  className="h-8 w-24 border border-Grey300 rounded text-black"
                  onClick={handleNoteSubmit}
                >
                  Send note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
