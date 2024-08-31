import Produto from "./produto";
import Thumb from "./thumb";

interface ImagemProps {
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
}

function Imagem({ isCartEmpty, isCartOpen, cartQuantity }: ImagemProps) {
  return (
    <div className="flex flex-col gap-5">
      <Produto
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        cartQuantity={cartQuantity}
      />
      <Thumb />
    </div>
  );
}

export default Imagem;
