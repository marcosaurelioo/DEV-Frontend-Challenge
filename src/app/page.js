import Image from "next/image";

import { OrderItem } from "../components/order-item";
import { OrderPrice } from "../components/order-price";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-Grey200 bg-particles-texture">
      <div className="w-full h-full sm:max-w-xl sm:py-10 py-6">
        <div className="flex gap-2 pb-6 sm:ml-0 ml-2">
          <Image alt="chevron icon" src="/chevron.svg" width={6} height={20} />
          <span>Back to orders</span>
        </div>

        <div className="bg-white w-full h-full sm:border border-t border-Grey1000 sm:rounded-xl shadow-custom-shadow p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1>Order 1534 · Sunning Hill Farm</h1>

              <div className="bg-Green100 w-14 rounded-lg text-center">
                <span className="text-Green800">Open</span>
              </div>
            </div>

            <span>Placed Tuesday, March 22 2022</span>
          </div>

          <div className="border border-Grey1000 border-dashed my-4" />

          <div className="flex flex-col gap-3">
            <OrderItem />
          </div>

          <OrderPrice />

          <div>
            <div className="flex items-center gap-2">
              <h4 className="whitespace-nowrap">Pickup · Toronto Central</h4>
              <div className="h-px w-full bg-Grey1000" />
            </div>

            <div className="flex flex-col gap-3 px-2 py-2">
              <div className="flex justify-between items-center w-full">
                <span>Pickup Date</span>
                <h4>Monday, October 16, 2023</h4>
              </div>

              <div className="flex justify-between items-center w-full">
                <span>Pickup Timeslot</span>
                <h4>12:30am</h4>
              </div>

              <div className="flex flex-col w-full">
                <span>Pickup Address</span>
                <h4>
                  Local Line, 500 King St. West Suite 305, Toronto ON M5V 1L9,
                  CA <a>Map</a>
                </h4>
              </div>

              <div className="flex flex-col w-full">
                <span>Pickup Instructions</span>
                <h4>
                  Pickup at our Toronto packing centre. Please take the elevator
                  to the third floor and enter the first door on your left.
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <h4 className="whitespace-nowrap">Payment · Credit</h4>
              <div className="h-px w-full bg-Grey1000" />
            </div>

            <div className="flex flex-col gap-3 px-2 py-2">
              <div className="flex justify-between items-center w-full">
                <span>Card</span>
                <h4>Visa **** 3245</h4>
              </div>

              <div className="flex justify-between items-center w-full">
                <span>Payment Due</span>
                <h4>Wednesday, October 18, 2023</h4>
              </div>

              <div className="flex flex-col w-full">
                <span>Payment Instructions</span>
                <h4>
                  Your order will be charged upon final weighing of your
                  products. If you wish to update your card on file you can do
                  so from the “Saved Cards” section of your account settings.
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <h4 className="whitespace-nowrap">Order Notes</h4>
              <div className="h-px w-full bg-Grey1000" />
            </div>

            <div className="flex flex-col gap-3 px-2 py-2">
              <div className="flex flex-col w-full">
                <span>Checkout note from you</span>

                <p>My Dearest Farmer,</p>
                <br />
                <p>
                  In the quiet moments, I find myself yearning for the taste of
                  your grapes, the richness of your tomatoes, the savor of your
                  beef, and the subtle layers of your onions. Each harvest
                  carries the echo of your presence, a reminder of a love that
                  feels just out of reach. My heart aches for the day when we
                  can share not only the fruits of your labor but the sweet
                  symphony of our intertwined hearts.
                </p>
                <br />
                <p>This order - sealed with a kiss,</p>
                <p>Frontend Developer</p>
              </div>

              <div>
                <span>Note from Sunning Hill Farm</span>
                <h4>Thank you for your order!</h4>
              </div>
            </div>
          </div>

          <div className="border border-Grey1000 border-dashed my-4" />

          <div>
            <div className="flex flex-col gap-3">
              <span>Send another note</span>

              <textarea
                className="min-h-32 border border-Grey300 rounded p-4"
                defaultValue="np hahaha 🫵😻"
              />

              <div className="flex justify-end">
                <button className="h-8 w-24 border border-Grey300 rounded">
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
