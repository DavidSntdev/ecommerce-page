import Produto from "./produto";
import Thumb from "./thumb";

function Imagem() {
  return (
    <div className="flex flex-col gap-5">
      <Produto />
      <Thumb />
    </div>
  );
}

export default Imagem;
