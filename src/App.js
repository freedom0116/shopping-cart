import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header'
import HomePage from './page/homePage/HomePage'
import CartPage from './page/cartPage/CartPage'
import InfoPage from './page/infoPage/InfoPage'
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
        <Route path="/cart" component={CartPage} />
        <Route path='/infoInput' component={InfoPage}/>

      </Switch>

    </div>
  );
}

export default App;
