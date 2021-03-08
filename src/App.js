import './App.css';
import Header from './components/header/Header'
import Products from'./components/products/Products'
import Cart from './components/cart/Cart'
import data from './data.json'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Products data={data} />
        </Route>
        <Route path="/cart" component={Cart} />
      </Switch>

    </div>
  );
}

export default App;
