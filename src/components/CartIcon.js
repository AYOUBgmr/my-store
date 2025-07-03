const CartIcon = ({ cart, toggleCart }) => (
  <div className="cart-icon" id="cartIcon" onClick={toggleCart}>
    <span className="cart-count" id="cartCount">
      {Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)}
    </span>
    <img
      src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
      alt="cart"
    />
  </div>
);

export default CartIcon;
