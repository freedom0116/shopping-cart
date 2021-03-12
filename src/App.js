import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header'
import HomePage from './page/HomePage'
import CartPage from './page/CartPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage 
            products={products}
            setProducts={setProducts}
            cartItems={cartItems} 
            setCartItems={setCartItems}
          />
        </Route>
        <Route path="/cart">
          <CartPage
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
