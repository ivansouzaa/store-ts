import { useState, createContext } from "react";
interface AppContextValue {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addItemToCart: (item: CartItem) => void;
  removeItemCart: (itemId: number) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}

interface CartItem {
  image: string;
  name: string;
  price: number;
  productId: string;
}
export const AppContext = createContext<AppContextValue | null>(null);

function AppProvider({ children }: AppProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemCart = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item: any) => item[0].productId !== itemId.toString())
    );
  };

  return (
    <>
      <AppContext.Provider
        value={{ cart, setCart, addItemToCart, removeItemCart }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default AppProvider;
