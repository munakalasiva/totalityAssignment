import "./index.css";
import CartContext from "../../context/CartContext";

const PropertyCard = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { item } = props;

      const { id, title, price, location, image } = item;

      const { addCartProperty } = value;
      const onClickAddProperty = () => {
        addCartProperty(item);
      };

      return (
        <li className={`list-item list-item${id}`}>
          <img src={image} alt="villa" className="image" />
          <div className="adjust">
            <div>
              <p className="title">{title}</p>
              <p>Location: {location}</p>
              <p>Cost: Rs/- {price}</p>
            </div>
            <div>
              <button className="book-btn" onClick={onClickAddProperty}>
                BOOK NOW
              </button>
            </div>
          </div>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default PropertyCard;
