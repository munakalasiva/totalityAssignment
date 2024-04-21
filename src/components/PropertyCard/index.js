import "./index.css";

const PropertyCard = (props) => {
  const { item } = props;
  const { id, title, price, location, image } = item;
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
          <button className="book-btn">BOOK NOW</button>
        </div>
      </div>
    </li>
  );
};

export default PropertyCard;
