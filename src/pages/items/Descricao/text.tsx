import { TextPropsItems } from "../../../data/interfaces";

function Text({ isBrasileiro }: TextPropsItems) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        <p className="font-bold text-xs text-[var(--colorDarkGrayBlue)]">
          {isBrasileiro ? "T Ê N I S" : "S N E A K E R"}
        </p>
        <p className="font-bold text-xs text-[var(--colorDarkGrayBlue)]">
          {isBrasileiro ? "E M P R E S A" : "C O M P A N Y"}
        </p>
      </div>
      <h1 className="font-bold text-3xl text-[var(--colorDarkBlue)] md:text-5xl md:mb-5 xl:mb-9 md:mt-2">
        {isBrasileiro
          ? "Ténis de edição limitada de outono"
          : "Fall Limited Edition Sneakers"}
      </h1>
      <p className="text-[var(--colorDarkGrayBlue)]">
        {isBrasileiro
          ? "Estes ténis de perfil baixo são o seu companheiro perfeito para uma utilização casual. Com uma sola exterior de borracha durável, resistirão a tudo o que o tempo possa oferecer"
          : "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer"}
      </p>
    </div>
  );
}

export default Text;
