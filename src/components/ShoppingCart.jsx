import React from "react";

export const ShoppingCart = () => {
  return (
    <aside className="product-detail">
      <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">Shopping Cart</h1>

          <div className="my-order-content">
            <div className="shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>

            <div className="shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>

            <div className="shopping-cart">
              <figure>
                <img
                  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="bike"
                />
              </figure>
              <p>Bike</p>
              <p>$30,00</p>
            </div>
          </div>
          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>
          <button className="primary-btn add-to-cart-btn">
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
