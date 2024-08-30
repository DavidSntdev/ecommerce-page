import { Button } from "@nextui-org/react";
import { icons, imgs } from "../../../data/data";

function Imagem() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Previous"
        className="absolute left-0 transform ml-3 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%]"
      >
        <img src={icons.previous} alt="Previous" width={10} />
      </Button>
      <img
        src={imgs.product1}
        alt="Product"
        className="w-full h-[350px] object-cover"
      />
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Next"
        className="mr-3 absolute right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-[50%]"
      >
        <img src={icons.next} alt="Next" width={10} />
      </Button>
    </div>
  );
}

export default Imagem;
