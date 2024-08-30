export const discount = (
  price: number,
  promo: number,
  setPriceDiscont: (price: number) => void
) => {
  const discount = promo / 100;
  setPriceDiscont(price * discount);
};
