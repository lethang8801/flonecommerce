import React from 'react';
import Home from './components/Home'
import About from './components/About';
import Shop from './components/Shop'
import Login from './components/Login'
import ProductItem from './components/ProductItem'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Home />,
    <Shop />,
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={Login} />
      <Route path="/productItem" component={ProductItem} />
    </Switch>

  );
}

export default App;
