import { Button } from "@nextui-org/react";
import { icons } from "../../data/data";
import { TextPropsHeader } from "../../data/interfaces";

function Text({ setMenuOpen, isBrasileiro }: TextPropsHeader) {
  return (
    <div className="flex gap-3 md:gap-16 items-center justify-center">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Menu Button"
        className="md:hidden border-0 bg-transparent"
        onClick={() => setMenuOpen(true)}
      >
        <img src={icons.menu} alt="" />
      </Button>
      <h1 className="text-[var(--colorDarkBlue)] font-bold text-4xl mt-[-6px]">
        {isBrasileiro ? "tênis" : "sneakers"}
      </h1>
      <div className="hidden md:flex gap-7 ">
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] h-full hover:border-b-2 hover:border-[var(--colorLaranja)]">
          {isBrasileiro ? "Coleções" : "Collections"}
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          {isBrasileiro ? "Homem" : "Men"}
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          {isBrasileiro ? "Mulher" : "Women"}
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          {isBrasileiro ? "Sobre" : "About"}
        </p>
        <p className="cursor-pointer text-[var(--colorDarkGrayBlue)] hover:border-b-2 hover:border-[var(--colorLaranja)]">
          {isBrasileiro ? "Contato" : "Contact"}
        </p>
      </div>
    </div>
  );
}

export default Text;
