import { Button } from "@nextui-org/react";
import { icons } from "../../../data/data";
import Thumb from "./thumb";
import Imagem from "./img";
import { motion } from "framer-motion";

interface ImgTelaCheiaProps {
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  activeImage: number;
  isMaxWidth: boolean;
  isImageFull: boolean;
}

const ImgTelaCheia = ({
  setImageFull,
  activeImage,
  setActiveImage,
  isMaxWidth,
  isImageFull,
}: ImgTelaCheiaProps) => {
  const handleBackgroundClick = () => {
    setImageFull(false);
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-20 items-center justify-center flex p-5 flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isImageFull ? 1 : 0, scale: isImageFull ? 1 : 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={handleBackgroundClick}
    >
      <div
        className="flex flex-col items-center w-auto justify-center gap-3"
        onClick={handleContentClick}
      >
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
    </motion.div>
  );
};

export default ImgTelaCheia;
