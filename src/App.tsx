import { useState } from "react";
import Header from "./pages/header";
import Items from "./pages/items";

function App() {
  const [isCartEmpty, setCartEmpty] = useState<boolean>(true);
  const [cartQuantity, setcartQuantity] = useState<number>(0);

  return (
    <>
      <Header isCartEmpty={isCartEmpty} cartQuantity={cartQuantity} />
      <hr className="lg:py-10 lg:border-[var(--colorLightGrayBlue)] hidden lg:block lg:w-[1000px] xl:w-[1200px] lg:mx-auto" />
      <Items
        isCartEmpty={isCartEmpty}
        setCartEmpty={setCartEmpty}
        setCartQuantity={setcartQuantity}
        cartQuantity={cartQuantity}
      />
    </>
  );
}

export default App;
