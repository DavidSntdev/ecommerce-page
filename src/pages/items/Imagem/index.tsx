import Produto from "./produto";
import Thumb from "./thumb";

interface ImagemProps {
  isCartEmpty: boolean;
}

function Imagem({ isCartEmpty }: ImagemProps) {
  return (
    <div className="flex flex-col gap-5">
      <Produto isCartEmpty={isCartEmpty} />
      <Thumb />
    </div>
  );
}

export default Imagem;
