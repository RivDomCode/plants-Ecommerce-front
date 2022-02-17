import React from "react";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Product Name</p>
        </div>

        <figure>
          <i className="fas fa-cart-plus product-cart"></i>
        </figure>
      </div>
    </div>
  );
};
