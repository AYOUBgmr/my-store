import React, { useState, useEffect, useCallback, useMemo } from "react";
import Header from "./components/Header.js";
import TopBar from "./components/TopBar.js";
import CartIcon from "./components/CartIcon.js";
import Cart from "./components/Cart.js";
import ProductGrid from "./components/ProductGrid.js";
import { formatWhatsAppMessage } from "./components/helpers.js";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState({});
  const [cartVisible, setCartVisible] = useState(false);
  const [categoryMenuVisible, setCategoryMenuVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All items");

  // تحميل المنتجات
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const normalized = data.map((item) => ({
          name: item.Name || "",
          price: parseFloat(item.Price) || 0,
          image: item.Image || "",
          category: item.Category || "",
          instock: (() => {
            if (typeof item.inStock === "boolean") return item.inStock;
            if (typeof item.inStock === "string") {
              const val = item.inStock.trim().toLowerCase();
              return val === "true" || val === "1";
            }
            if (typeof item.inStock === "number") {
              return item.inStock !== 0;
            }
            return false;
          })(),
        }));

        setProducts(normalized);

        const cats = [
          ...new Set(
            normalized.map((p) => p.category.trim()).filter((c) => c !== "")
          ),
        ];
        setCategories(cats);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  // فلترة المنتجات
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== "All items") {
      filtered = filtered.filter(
        (p) => p.category.trim() === selectedCategory
      );
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [products, selectedCategory, searchTerm]);

  // إضافة منتج للسلة
  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.name]) {
        newCart[product.name].quantity += 1;
      } else {
        newCart[product.name] = { price: product.price, quantity: 1 };
      }
      return newCart;
    });
  }, []);

  // تحديث عنصر في السلة
  const updateCartItem = useCallback((name, action) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (!newCart[name]) return prevCart;
      if (action === "remove") {
        delete newCart[name];
      } else if (action === "increase") {
        newCart[name].quantity += 1;
      } else if (action === "decrease") {
        if (newCart[name].quantity > 1) {
          newCart[name].quantity -= 1;
        } else {
          delete newCart[name];
        }
      }
      return newCart;
    });
  }, []);

  // حساب السعر الكلي
  const totalPrice = useMemo(
    () =>
      Object.entries(cart).reduce(
        (sum, [_, item]) => sum + item.price * item.quantity,
        0
      ),
    [cart]
  );

  // الطلب عبر WhatsApp
  const orderViaWhatsApp = useCallback(() => {
    if (Object.keys(cart).length === 0) {
      alert("السلة فارغة!");
      return;
    }
    const msg = formatWhatsAppMessage(cart, totalPrice);
    const url = `https://wa.me/212601171498?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }, [cart, totalPrice]);

  // إخفاء السلة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      const cartEl = document.getElementById("cart");
      const cartIconEl = document.getElementById("cartIcon");

      if (
        cartEl &&
        cartIconEl &&
        !cartEl.contains(event.target) &&
        !cartIconEl.contains(event.target)
      ) {
        setCartVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Header />
      <TopBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleCategoryMenu={() => setCategoryMenuVisible((v) => !v)}
        categoryMenuVisible={categoryMenuVisible}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="container">
        <CartIcon cart={cart} toggleCart={() => setCartVisible((v) => !v)} />
        <Cart
          cart={cart}
          visible={cartVisible}
          totalPrice={totalPrice}
          updateCartItem={updateCartItem}
          orderViaWhatsApp={orderViaWhatsApp}
        />
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
