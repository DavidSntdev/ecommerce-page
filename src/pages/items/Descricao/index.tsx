import Text from "./text";
import Price from "./price";
import Compra from "./compra";
import { DescricaoProps } from "../../../data/interfaces";

function Descricao({
  setCartEmpty,
  setCartQuantity,
  cartQuantity,
  isBrasileiro,
}: DescricaoProps) {
  return (
    <div className="flex flex-col p-5 flex-wrap gap-3 md:w-[500px] xl:w-[600px] md:p-16 ">
      <Text isBrasileiro={isBrasileiro} />
      <Price isBrasileiro={isBrasileiro} />
      <Compra
        setCartEmpty={setCartEmpty}
        setCartQuantity={setCartQuantity}
        cartQuantity={cartQuantity}
        isBrasileiro={isBrasileiro}
      />
    </div>
  );
}
export default Descricao;
