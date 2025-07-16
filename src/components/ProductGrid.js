import React from "react";
import ProductCard from "./ProductCard.js";

const ProductGrid = React.memo(({ products, addToCart }) => (
  <div className="product-grid">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} addToCart={addToCart} />
    ))}
  </div>
));

export default ProductGrid;
