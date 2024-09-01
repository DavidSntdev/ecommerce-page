export interface MenuProps {
  setMenuOpen: (value: boolean) => void;
  isBrasileiro: boolean;
}

export interface ItemsProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  isCartEmpty: boolean;
  cartQuantity: number;
  isCartOpen: boolean;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
  isBrasileiro: boolean;
}

export interface ThumbProps {
  setActiveImage: (value: number) => void;
  activeImage: number;
}

export interface ImgTelaCheiaProps {
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  activeImage: number;
  isMaxWidth: boolean;
  isImageFull: boolean;
}

export interface ProdutoProps {
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
  isBrasileiro: boolean;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  setImageFull: (value: boolean) => void;
}

export interface ImagemProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setImageFull: (value: boolean) => void;
  setActiveImage: (value: number) => void;
  activeImage: number;
  isCartEmpty: boolean;
  isCartOpen: boolean;
  cartQuantity: number;
  isMaxWidth: boolean;
  isImageFull: boolean;
  isBrasileiro: boolean;
}

export interface ImgProps {
  setImageFull: (value: boolean) => void;
  isMaxWidth: boolean;
  activeImage: number;
  isImageFull: boolean;
}

export interface TextPropsItems {
  isBrasileiro: boolean;
}

export interface PriceProps {
  isBrasileiro: boolean;
}

export interface DescricaoProps {
  setCartEmpty: (value: boolean) => void;
  setCartQuantity: (value: number) => void;
  cartQuantity: number;
  isBrasileiro: boolean;
}

export interface CompraProps {
  setCartEmpty: (value: boolean) => void;
  setCartQuantity: (value: number) => void;
  cartQuantity: number;
  isBrasileiro: boolean;
}

export interface TextPropsHeader {
  setMenuOpen: (value: boolean) => void;
  isBrasileiro: boolean;
}

export interface HeaderProps {
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
  setMenuOpen: (value: boolean) => void;
  cartQuantity: number;
  isCartEmpty: boolean;
  isCartOpen: boolean;
  isMaxWidth: boolean;
  isBrasileiro: boolean;
}

export interface CartProps {
  isCartEmpty: boolean;
  isBrasileiro: boolean;
  cartQuantity: number;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
  setCartOpen: (value: boolean) => void;
}

export interface CartContentProps {
  price: number;
  priceCart: number;
  cartQuantity: number;
  isBrasileiro: boolean;
  setCartQuantity: (value: number) => void;
  setCartEmpty: (value: boolean) => void;
}
