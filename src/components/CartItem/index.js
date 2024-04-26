import CartContext from "../../context/CartContext";
import "./index.css";

const CartItem = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { removeCartProperty } = value;

      const { eachCartItem } = props;
      const { id, title, price, image } = eachCartItem;

      const onRemoveBtn = () => {
        removeCartProperty(id);
      };

      return (
        <li className="list-items">
          <img src={image} alt="cart-img" className="cart-img" />
          <p className="cart-title">{title}</p>
          <p className="price">Rs/- {price}</p>

          <button className="remove-btn" onClick={onRemoveBtn}>
            Remove
          </button>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default CartItem;
