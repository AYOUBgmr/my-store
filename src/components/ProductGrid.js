import ProductCard from "./ProductCard.js";

const ProductGrid = ({ products, addToCart }) => (
  <div className="product-grid">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductGrid;

