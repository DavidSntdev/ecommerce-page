import { useEffect, useState } from "react";
import { discount } from "../../../components/discont";
import { PriceProps } from "../../../data/interfaces";

function Price({ isBrasileiro }: PriceProps) {
  const [price] = useState<number>(250);
  const [promo] = useState<number>(50);
  const [priceDiscont, setPriceDiscont] = useState<number>(0);

  useEffect(() => {
    discount(price, promo, setPriceDiscont);
  }, [price, promo]);

  return (
    <div className="flex flex-row md:flex-col justify-between py-4 md:gap-3">
      <div className="flex flex-row gap-5">
        <p className="text-3xl font-bold text-[var(--colorDarkBlue)]">
          {isBrasileiro ? "R$" : "$"}
          {priceDiscont.toFixed(2)}
        </p>
        <p className="text-lg font-bold bg-[var(--colorDarkBlue)] rounded-md px-2 my-[5px] flex justify-center items-center text-[var(--colorLightBlue)]">
          {promo}%
        </p>
      </div>
      <p className="font-bold text-[var(--colorDarkGrayBlue)] text-lg line-through">
        {isBrasileiro ? "R$" : "$"}
        {price.toFixed(2)}
      </p>
    </div>
  );
}
export default Price;
