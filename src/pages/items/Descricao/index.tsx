import Text from "./text";
import Price from "./price";
import Compra from "./compra";

interface DescricaoProps {
  setCartEmpty: (value: boolean) => void;
  setCartQuantity: (value: number) => void;
  cartQuantity: number;
}

function Descricao({
  setCartEmpty,
  setCartQuantity,
  cartQuantity,
}: DescricaoProps) {
  return (
    <div className="flex flex-col p-5 flex-wrap gap-3 md:w-[500px] xl:w-[600px] md:p-16 ">
      <Text />
      <Price />
      <Compra
        setCartEmpty={setCartEmpty}
        setCartQuantity={setCartQuantity}
        cartQuantity={cartQuantity}
      />
    </div>
  );
}
export default Descricao;
