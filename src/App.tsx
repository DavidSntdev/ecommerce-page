import { useEffect, useState } from "react";
import Header from "./pages/header";
import Items from "./pages/items";
import Menu from "./pages/Menu";
import ImgTelaCheia from "./pages/items/Imagem/telaCheia";

function App() {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  const [cartQuantity, setcartQuantity] = useState<number>(0);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isMaxWidth, setMaxWidth] = useState<boolean>(false);
  const [isMaxWidthImg, setMaxWidthImg] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(1);
  const [isImageFull, setImageFull] = useState<boolean>(false);
  const MAX_WIDTH = 1024;
  const MAX_WIDTH_IMG = 768;

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth <= MAX_WIDTH);
      setMaxWidthImg(window.innerWidth <= MAX_WIDTH_IMG);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header
        isCartEmpty={isCartEmpty}
        cartQuantity={cartQuantity}
        setCartOpen={setCartOpen}
        isCartOpen={isCartOpen}
        setCartEmpty={setCartEmpty}
        setCartQuantity={setcartQuantity}
        isMaxWidth={isMaxWidth}
        setMenuOpen={setMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      {isMaxWidth && isMenuOpen && <Menu setMenuOpen={setMenuOpen} />}
      {!isMaxWidthImg && isImageFull && (
        <ImgTelaCheia
          setImageFull={setImageFull}
          setActiveImage={setActiveImage}
          activeImage={activeImage}
          isMaxWidth={isMaxWidth}
          isImageFull={isImageFull}
        />
      )}
      <hr className="lg:py-10 lg:border-[var(--colorLightGrayBlue)] hidden lg:block lg:w-[1000px] xl:w-[1200px] lg:mx-auto" />
      <Items
        setCartQuantity={setcartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        setImageFull={setImageFull}
        cartQuantity={cartQuantity}
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        isMaxWidth={isMaxWidth}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        isImageFull={isImageFull}
      />
    </>
  );
}

export default App;
