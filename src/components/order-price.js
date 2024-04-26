export function OrderPrice({ purchaseValues }) {
  return (
    <div className="flex justify-end mt-4 mb-6">
      <div className="flex flex-col gap-2 sm:max-w-72 w-full justify-center">
        <div className="flex justify-between items-center w-full">
          <span>Subtotal</span>
          <h4>{purchaseValues.subtotal}</h4>
        </div>

        <div className="flex justify-between items-center w-full">
          <span>Delivery Fee</span>
          <h4>{purchaseValues.fee}</h4>
        </div>

        <div className="flex justify-between items-center w-full">
          <span>Tax</span>
          <h4>{purchaseValues.tax}</h4>
        </div>

        <hr className="h-px w-full" />

        <div className="flex justify-between items-center w-full">
          <h1>Total</h1>
          <h1>{purchaseValues.total}</h1>
        </div>

        <div className="flex justify-between items-center w-full">
          <span>Payment Status</span>
          <h4>{purchaseValues.payment_status}</h4>
        </div>

        <button className="w-full h-8 border border-Grey300 rounded">
          View invoice
        </button>
      </div>
    </div>
  );
}
