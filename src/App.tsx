import { useEffect, useState } from "react";
import Header from "./pages/header";
import Items from "./pages/items";

function App() {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  const [cartQuantity, setcartQuantity] = useState<number>(0);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const [isMaxWidth, setMaxWidth] = useState<boolean>(false);
  const MAX_WIDTH = 1024;
  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth <= MAX_WIDTH);
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
      />
      <hr className="lg:py-10 lg:border-[var(--colorLightGrayBlue)] hidden lg:block lg:w-[1000px] xl:w-[1200px] lg:mx-auto" />
      <Items
        setCartQuantity={setcartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
        isMaxWidth={isMaxWidth}
      />
    </>
  );
}

export default App;
