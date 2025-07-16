import React from "react";

const Cart = React.memo(({ cart, visible, totalPrice, updateCartItem, orderViaWhatsApp }) => (
  <div id="cart" className={`cart ${visible ? "" : "hidden"}`}>
    <h2>
      <img
        src="https://img.icons8.com/ios-filled/20/000000/shopping-cart.png"
        alt="cart icon"
      />
      سلة المشتريات
    </h2>
    <ul id="cartItems">
      {Object.keys(cart).length === 0 && <li>السلة فارغة</li>}
      {Object.entries(cart).map(([name, item]) => {
        const displayName = name.split(" ").length > 3
          ? name.split(" ").slice(0, 3).join(" ") + "..."
          : name;
        return (
          <li key={name}>
            <div className="product-info">
              {displayName} × {item.quantity} - {item.price.toFixed(2)} dh
            </div>
            <div className="cart-buttons">
              <button onClick={() => updateCartItem(name, "remove")}>حذف</button>
              <button onClick={() => updateCartItem(name, "increase")}>+</button>
              <button onClick={() => updateCartItem(name, "decrease")}>-</button>
            </div>
          </li>
        );
      })}
    </ul>
    <div className="cart-total">
      المجموع: <span id="cartTotalPrice">{totalPrice.toFixed(2)}</span> dh
    </div>
    <button id="orderBtn" onClick={orderViaWhatsApp}>
      أرسل الطلب عبر WhatsApp
    </button>
  </div>
));

export default Cart;
