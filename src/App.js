import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './firebase/firebase'
/* Javascripts */
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Cart from "../src/components/Cart/Cart"
import CartCustomProvider from "./components/Context/CartContext";
/* CSS */
import "./App.css";

const App = () => {
  return (
    <BrowserRouter className="App">
      <CartCustomProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
}

export default App;