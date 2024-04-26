import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addCartProperty: () => {},
  removeCartProperty: () => {},
});
export default CartContext;
