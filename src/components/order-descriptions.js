import moment from "moment";

export function OrderDescriptions({ data }) {
  return (
    <div>
      <OrderDescriptionWrapper title="Pickup · Toronto Central">
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
            {data?.fulfillment?.fulfillment_address} <a>Map</a>
          </h4>
        </div>

        <div className="flex flex-col w-full">
          <span>Pickup Instructions</span>
          <h4>
            Pickup at our Toronto packing centre. Please take the elevator to
            the third floor and enter the first door on your left.
          </h4>
        </div>
      </OrderDescriptionWrapper>

      <OrderDescriptionWrapper title="Payment · Credit">
        <div className="flex justify-between items-center w-full">
          <span>Card</span>
          <h4>Visa **** 3245</h4>
        </div>

        <div className="flex justify-between items-center w-full">
          <span>Payment Due</span>
          <h4>{moment(data.due_date).format("dddd, MMMM DD, YYYY")}</h4>
        </div>

        <div className="flex flex-col w-full">
          <span>Payment Instructions</span>
          <h4>
            Your order will be charged upon final weighing of your products. If
            you wish to update your card on file you can do so from the “Saved
            Cards” section of your account settings.
          </h4>
        </div>
      </OrderDescriptionWrapper>

      <OrderDescriptionWrapper title="Order Notes">
        <div className="flex flex-col w-full">
          <span>Checkout note from you</span>

          {data?.customer_note?.split("\n").map((word, i, arr) => (
            <div key={i}>
              <p>{word}</p>
              {arr.length - 1 !== i && <br />}
            </div>
          ))}
        </div>

        <div>
          <span>Note from Sunning Hill Farm</span>
          <h4>Thank you for your order!</h4>
        </div>
      </OrderDescriptionWrapper>
    </div>
  );
}

function OrderDescriptionWrapper({ title, children }) {
  return (
    <section className="mb-4">
      <div className="flex items-center gap-2">
        <h4 className="whitespace-nowrap">{title}</h4>
        <div className="h-px w-full bg-Grey1000" />
      </div>

      <div className="flex flex-col gap-3 px-2 py-2">{children}</div>
    </section>
  );
}
