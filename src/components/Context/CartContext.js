import React, { useState, createContext, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  const getQtyProducts = () => {
    let qty = 0;
    products.forEach((products) => (qty += products.qty));
    setQtyProducts(qty);
  };

  useEffect(() => {
    getQtyProducts();
  }, [products]);

  const addProduct = (product) => {
    if (isInCart(product.id)) {
      const found = products.find((p) => p.id === product.id);
      const index = products.indexOf(found);
      const aux = [...products];
      aux[index].qty += product.qty;
      setProducts(aux);
    } else {
      setProducts([...products, product]);
    }
  };
  const deleteProduct = (id) => {
    setProducts(products.filter((products) => products.id !== id));
    getQtyProducts();
  };
  const isInCart = (id) => {
    return products.some((products) => products.id === id);
  };
  const clear = () => {
    setProducts([]);
    setQtyProducts(0);
  };

  const contextValues = {
    products,
    addProduct,
    deleteProduct,
    qtyProducts,
    clear,
  }
  return <Provider value={contextValues}>{children}</Provider>;
};

export default CartCustomProvider;
