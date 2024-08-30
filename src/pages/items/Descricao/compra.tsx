import { Button } from "@nextui-org/react";
import { icons } from "../../../data/data";
import { useState } from "react";

function Compra() {
  const [quantidade] = useState<number>(0);
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-5">
      <div className="flex justify-between px-5 lg:px-0 lg:w-4/12 items-center">
        <button className="h-full w-5 flex items-center justify-center">
          <img src={icons.minus} alt="" className="w-3 h-1" />
        </button>
        <p className="text-lg text-[var(--colorDarkBlue)] font-bold">
          {quantidade}
        </p>
        <button className="h-full w-5 flex items-center justify-center">
          <img src={icons.plus} alt="" className="w-3 h-3" />
        </button>
      </div>
      <Button
        color="primary"
        variant="shadow"
        className="bg-[var(--colorLaranja)] h-14 text-[var(--colorDarkBlue)] text-lg font-bold flex flex-row gap-5 lg:w-8/12"
        style={{ boxShadow: "0px 15px 40px -20px var(--colorLaranja)" }}
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="black"
            fill-rule="nonzero"
          />
        </svg>
        Add to cart
      </Button>
    </div>
  );
}

export default Compra;
