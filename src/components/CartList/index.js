import CartContext from "../../context/CartContext";
import CartSummary from "../CartSummary";
import CartItem from "../CartItem";
import "./index.css";

const CartList = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;

      return (
        <div className="cont">
          <h1 className="main-head">My cart</h1>
          <ul className="cart-list">
            {cartList.map((eachCartItem) => (
              <CartItem key={eachCartItem.id} eachCartItem={eachCartItem} />
            ))}
          </ul>

          <CartSummary />
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default CartList;
