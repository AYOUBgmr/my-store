import React from "react";

const ProductCard = React.memo(({ product, addToCart }) => {
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
  };

  return (
    <div className="product-card">
      <img
        src={product.image || "https://via.placeholder.com/500x500?text=No+Image"}
        alt={product.name}
        onError={handleImgError}
      />
      <h3>{product.name}</h3>
      <p>{product.price} dh</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
       أضف لسلة
      </button>
    </div>
  );
});

export default ProductCard;
