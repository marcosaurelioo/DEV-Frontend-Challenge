// import Image from "next/image";

export function OrderItem() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 w-full">
        {/* <Image
          className="rounded object-cover"
          alt="order image"
          height={48}
          width={48}
        /> */}

        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between items-center w-full">
            <h4>Conchord Grapes x2</h4>
            <a>view</a>
          </div>

          <div className="flex justify-between items-center w-full">
            <span>$4.39 / package</span>
            <h4>$8.78</h4>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-Grey1000 mt-4" />
    </div>
  );
}
