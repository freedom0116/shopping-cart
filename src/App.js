import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header'
import HomePage from './page/HomePage'
import CartPage from './page/CartPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage 
            products={products}
            setProducts={setProducts}
          />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
