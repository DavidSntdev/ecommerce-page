import { Button } from "@nextui-org/react";
import { icons } from "../../data/data";

interface MenuProps {
  setMenuOpen: (value: boolean) => void;
}

function Menu({ setMenuOpen }: MenuProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-2/5 h-screen bg-white bg-opacity-100 z-50 md:hidden p-5 flex flex-col">
        <Button
          isIconOnly
          color="default"
          variant="faded"
          aria-label="Menu Button"
          className="md:hidden border-0 bg-transparent"
          onClick={() => setMenuOpen(false)}
        >
          <img src={icons.menu} alt="" />
        </Button>
        <div className="flex flex-col gap-7 px-3 py-5 ">
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] h-full hover:border-b-2 hover:border-[var(--colorLaranja)]">
            Collections
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
            Men
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
            Women
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
            About
          </p>
          <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
            Contact
          </p>
        </div>
      </div>
    </>
  );
}

export default Menu;
