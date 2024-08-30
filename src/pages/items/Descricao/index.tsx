import Text from "./text";
import Price from "./price";
import Compra from "./compra";

function Descricao() {
  return (
    <div className="flex flex-col p-5 flex-wrap gap-3 lg:w-[600px] lg:p-16">
      <Text />
      <Price />
      <Compra />
    </div>
  );
}
export default Descricao;
