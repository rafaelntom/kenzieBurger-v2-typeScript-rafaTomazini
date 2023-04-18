import { createContext, useState } from 'react';
import { kenzieApi } from '../services/api';

interface ICartProviderProps {
  children: React.ReactNode;
}

interface ICartContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  getAllProducts: () => Promise<void>;
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cartProducts: ICartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
  finalPrice: number;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartModal, setCartModal] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
  const token = localStorage.getItem('@kBurguerUserToken');

  const getAllProducts = async () => {
    try {
      kenzieApi.defaults.headers.common.authorization = `Bearer ${token}`;
      const response = await kenzieApi.get('/products');
      console.log(response.data);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        getAllProducts,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
