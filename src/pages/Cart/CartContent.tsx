import { icons, imgs } from "../../data/data";
import { CartContentProps } from "../../data/interfaces";

function CartContent({
  price,
  cartQuantity,
  priceCart,
  setCartQuantity,
  setCartEmpty,
  isBrasileiro,
}: CartContentProps) {
  const deleteItemCart = () => {
    if (cartQuantity === 1) setCartEmpty(true);
    setCartQuantity(cartQuantity - 1);
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-5">
        <img src={imgs.thumb1} alt="" className="w-12 h-12 rounded-md" />
        <div>
          <p className="font-medium text-[var(--colorDarkGrayBlue)]">
            {isBrasileiro
              ? "Ténis de edição limitada de outono"
              : "Fall Limited Edition Sneakers"}
          </p>
          <div className="flex gap-3">
            <p className="font-medium text-[var(--colorDarkGrayBlue)]">
              {isBrasileiro ? "R$" : "$"}
              {price.toFixed(2)} x {cartQuantity}
            </p>
            <p className="font-bold text-black">
              {isBrasileiro ? "R$" : "$"}
              {priceCart.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <button onClick={deleteItemCart}>
        <img src={icons.delete} alt="delete" className="h-6 w-5" />
      </button>
    </div>
  );
}

export default CartContent;
