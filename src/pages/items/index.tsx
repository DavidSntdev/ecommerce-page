import Descricao from "./Descricao";
import Imagem from "./Imagem";

interface ItemsProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  isCartEmpty: boolean;
  cartQuantity: number;
  isCartOpen: boolean;
  isMaxWidth: boolean;
}

function Items({
  isCartEmpty,
  setCartEmpty,
  setCartQuantity,
  cartQuantity,
  isCartOpen,
  setCartOpen,
  isMaxWidth,
}: ItemsProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[900px] xl:w-[1150px] lg:mx-auto lg:justify-between">
      <Imagem
        setCartQuantity={setCartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        isMaxWidth={isMaxWidth}
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
