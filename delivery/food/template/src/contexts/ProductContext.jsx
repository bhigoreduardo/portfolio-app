/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState("");

  return (
    <ProductContext.Provider value={{
      open, setOpen,
      product, setProduct
    }}>
      {children}
    </ProductContext.Provider>
  )
}
