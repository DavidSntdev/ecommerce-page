import { Button } from "@nextui-org/react";
import { icons } from "../../../data/data";
import Thumb from "./thumb";
import Imagem from "./img";

interface ImgTelaCheiaProps {
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  activeImage: number;
  isMaxWidth: boolean;
  isImageFull: boolean;
}

function ImgTelaCheia({
  setImageFull,
  activeImage,
  setActiveImage,
  isMaxWidth,
  isImageFull,
}: ImgTelaCheiaProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-20 items-center justify-center flex p-5 flex-col">
      <div className="flex flex-col items-center w-auto justify-center gap-3">
        <Button
          isIconOnly
          color="default"
          variant="faded"
          aria-label="Menu Button"
          className="border-0 bg-transparent bg-white self-end"
          onClick={() => setImageFull(false)}
        >
          <img src={icons.close} alt="" />
        </Button>
        <Imagem
          activeImage={activeImage}
          setImageFull={setImageFull}
          isMaxWidth={isMaxWidth}
          isImageFull={isImageFull}
        />
        <Thumb setActiveImage={setActiveImage} activeImage={activeImage} />
      </div>
    </div>
  );
}

export default ImgTelaCheia;
