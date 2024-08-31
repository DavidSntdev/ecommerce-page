import { useState } from "react";
import Header from "./pages/header";
import Items from "./pages/items";

function App() {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  const [cartQuantity, setcartQuantity] = useState<number>(0);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <>
      <Header
        isCartEmpty={isCartEmpty}
        cartQuantity={cartQuantity}
        setCartOpen={setCartOpen}
        isCartOpen={isCartOpen}
      />
      <hr className="lg:py-10 lg:border-[var(--colorLightGrayBlue)] hidden lg:block lg:w-[1000px] xl:w-[1200px] lg:mx-auto" />
      <Items
        setCartQuantity={setcartQuantity}
        setCartEmpty={setCartEmpty}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
        isCartEmpty={isCartEmpty}
        isCartOpen={isCartOpen}
      />
    </>
  );
}

export default App;
