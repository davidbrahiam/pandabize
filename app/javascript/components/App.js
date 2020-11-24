import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from "./Products/Products"
import Product from "./Product/Product"
import Home from "./Home/Home"

const App = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Product} />
    </Switch>
  )
}

export default App