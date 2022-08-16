import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Order Summery</h2>
      <p>Selected Items:{cart.length}</p>
    </div>
  );
};

export default Cart;
