import './App.css';
import Header from './components/header/Header'
import HomePage from './page/HomePage'
import Cart from './components/cart/Cart'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cart" component={Cart} />
      </Switch>

    </div>
  );
}

export default App;
