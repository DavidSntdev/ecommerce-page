function Text() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-3">
        <p className="font-bold text-xs text-[var(--colorDarkGrayBlue)]">
          S N E A K E R
        </p>
        <p className="font-bold text-xs text-[var(--colorDarkGrayBlue)]">
          C O M P A N Y
        </p>
      </div>
      <h1 className="font-bold text-3xl text-[var(--colorDarkBlue)]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[var(--colorDarkGrayBlue)]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
    </div>
  );
}

export default Text;
