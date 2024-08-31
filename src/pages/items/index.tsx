import Descricao from "./Descricao";
import Imagem from "./Imagem";

interface ItemsProps {
  setCartEmpty: (value: boolean) => void;
  setCartQuantity: (value: number) => void;
  isCartEmpty: boolean;
  cartQuantity: number;
  isCartOpen: boolean;
}

function Items({
  isCartEmpty,
  setCartEmpty,
  setCartQuantity,
  cartQuantity,
  isCartOpen,
}: ItemsProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[900px] xl:w-[1150px] lg:mx-auto lg:justify-between">
      <Imagem
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        cartQuantity={cartQuantity}
      />
      <Descricao
        setCartEmpty={setCartEmpty}
        setCartQuantity={setCartQuantity}
        cartQuantity={cartQuantity}
      />
    </div>
  );
}
export default Items;
