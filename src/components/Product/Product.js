import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
    // console.log(props)
    const {handleAddtoCart} = props;
  const { img, name, ratings, price, seller } = props.product;
  // console.log(props)
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>{seller}</p>
        <p>Ratings:{ratings} start</p>
        
      </div>
      <button onClick={() => handleAddtoCart(props.product)} className="btn-cart">
            <span className="btn-text">Add to Cart</span>
            <FontAwesomeIcon className="shopping-icon" icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default Product;
