import Descricao from "./Descricao";
import Imagem from "./Imagem";

function Items() {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1150px] lg:mx-auto lg:justify-between">
      <Imagem />
      <Descricao />
    </div>
  );
}
export default Items;
