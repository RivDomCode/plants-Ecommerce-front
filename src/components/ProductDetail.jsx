import React from "react";

export const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <i className="fas fa-times close"></i>
      <img
        src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt="plant-detail"
      />
      <div className="product-info">
        <p>$35,00</p>
        <p>Cactus</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          enim qui! Nobis aut, magnam a esse laborum ullam laboriosam nulla
          soluta id pariatur dolorem dolorum. Recusandae dolor obcaecati veniam
          facilis?
        </p>
      </div>
      <button className="primary-btn add-to-cart-btn">
        <i className="fas fa-shopping-cart"></i>
        <span>Add to Cart</span>
      </button>
    </aside>
  );
};
