import { icons, imgs } from "../../data/data";

interface CartContentProps {
  price: number;
  priceCart: number;
  cartQuantity: number;
}

function CartContent({ price, cartQuantity, priceCart }: CartContentProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-5">
        <img src={imgs.thumb1} alt="" className="w-12 h-12 rounded-md" />
        <div>
          <p className="font-medium text-[var(--colorDarkGrayBlue)]">
            Fall Limited Edition Sneakers
          </p>
          <div className="flex gap-3">
            <p className="font-medium text-[var(--colorDarkGrayBlue)]">
              ${price.toFixed(2)} x {cartQuantity}
            </p>
            <p className="font-bold text-black">${priceCart.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <button>
        <img src={icons.delete} alt="" className="h-6 w-5" />
      </button>
    </div>
  );
}

export default CartContent;
