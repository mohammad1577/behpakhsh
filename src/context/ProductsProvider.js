import React, { useContext, useState } from 'react'

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [number, setNumber] = useState(0)

  return (
    <ProductsContext.Provider
      value={{
        number,
        setNumber,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
