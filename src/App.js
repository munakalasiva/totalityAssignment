import { Route, Switch } from "react-router-dom";

import { Component } from "react";

import LoginForm from "./components/LoginForm";
import PropertyListings from "./components/PropertyListings";
import CartList from "./components/CartList";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import CartContext from "./context/CartContext";

class App extends Component {
  state = {
    cartList: [],
  };

  addCartProperty = (item) => {
    this.setState((prevState) => ({ cartList: [...prevState.cartList, item] }));
  };

  removeCartProperty = (id) => {
    const { cartList } = this.state;
    const updatedCartItems = cartList.filter(
      (eachCartItem) => eachCartItem.id !== id
    );
    this.setState({ cartList: updatedCartItems });
  };

  render() {
    const { cartList } = this.state;

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartProperty: this.addCartProperty,
          removeCartProperty: this.removeCartProperty,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={PropertyListings} />
          <ProtectedRoute exact path="/cart" component={CartList} />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
