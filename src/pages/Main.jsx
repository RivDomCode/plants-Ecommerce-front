import React from "react";
import { ProductCard } from "./ProductCard";

export const Main = () => {
  return (
    <section className="main-container">
      <div className="cards-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};
