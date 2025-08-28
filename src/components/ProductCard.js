import React from "react";

const ProductCard = React.memo(({ product, addToCart }) => {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
  };

  return (
    <div className="product-card">
      <div style={{ position: "relative" }}>
        <img
          src={
            product.image ||
            "https://via.placeholder.com/500x500?text=No+Image"
          }
          alt={product.name}
          onError={handleImgError}
        />
        {/* حالة المخزون */}
        <span className={`stock-status ${product.instock ? "in" : "out"}`}>
          {product.instock ? "In stock" : "No stock"}
        </span>
      </div>

      <h3>{product.name}</h3>
      <p>{product.price} dh</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        add to cart
      </button>
    </div>
  );
});

export default ProductCard;
