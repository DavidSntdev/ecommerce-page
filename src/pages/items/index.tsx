import Descricao from "./Descricao";
import Imagem from "./Imagem";

function Items() {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1250px] lg:mx-auto">
      <Imagem />
      <Descricao />
    </div>
  );
}
export default Items;
