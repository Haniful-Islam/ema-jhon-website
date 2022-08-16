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
            <span>Add to Cart</span>
        </button>
    </div>
  );
};

export default Product;
