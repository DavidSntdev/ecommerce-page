import { Image } from "@nextui-org/react";
import { imgs } from "../../../data/data";
import { useEffect, useState } from "react";

interface ImgProps {
  setImageFull: (value: boolean) => void;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
}

function Img({ activeImage, isMaxWidth, setImageFull, isImageFull }: ImgProps) {
  const [isMaxHeight1, setMaxHeight1] = useState<boolean>(false);
  const [isMaxHeight2, setMaxHeight2] = useState<boolean>(false);
  const MAX_HEIGHT_1 = 850,
    MAX_HEIGHT_2 = 680;
  useEffect(() => {
    const handleResize = () => {
      setMaxHeight1(window.innerHeight <= MAX_HEIGHT_1);
      setMaxHeight2(window.innerHeight <= MAX_HEIGHT_2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const img = (() => {
    switch (activeImage) {
      case 1:
        return imgs.product1;
      case 2:
        return imgs.product2;
      case 3:
        return imgs.product3;
      case 4:
        return imgs.product4;
      default:
        return imgs.product1;
    }
  })();
  return (
    <>
      {isMaxWidth ? (
        <img
          src={img}
          alt="Product"
          className="w-full h-[325px] object-cover xss:h-[380px] xs:h-[450px] sm:h-[500px] md:h-[400px] lg:h-[750px] md:rounded-2xl"
        />
      ) : (
        <Image
          isZoomed
          alt="Product"
          className="w-full object-cover h-[500px] rounded-2xl cursor-pointer"
          src={img}
          onClick={() => setImageFull(true)}
          style={{
            height:
              !isMaxHeight1 && isImageFull
                ? "700px"
                : !isMaxHeight2 && isImageFull
                ? "500px"
                : isImageFull
                ? "400px"
                : "500px",
          }}
        />
      )}
    </>
  );
}
export default Img;
