import ProductCard from "./ProductCard.js";

const ProductGrid = ({ products, addToCart }) => (
  <div className="product-grid">
    {products.length === 0 ? (
      <p style={{ padding: "20px" }}>لا توجد منتجات مطابقة.</p>
    ) : (
      products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))
    )}
  </div>
);

export default ProductGrid;
