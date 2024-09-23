import { createContext } from "react";

interface ContextType {
  fetchUserAddToCart: () => Promise<void>;
  productQuantityInCart: number;
  fetchUserDetails: () => Promise<void>;
}

const Context = createContext<ContextType | null>(null); // Accepts either the correct object or null initially

export default Context;
