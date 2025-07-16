const TopBar = ({
  searchTerm,
  setSearchTerm,
  toggleCategoryMenu,
  categoryMenuVisible,
  categories,
  selectedCategory,
  setSelectedCategory
}) => (
  <nav className="top-bar">
    <button id="categoryBtn" onClick={toggleCategoryMenu}>الفئات</button>
    <input
      type="text"
      id="searchInput"
      placeholder="ابحث عن المنتجات..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {categoryMenuVisible && (
      <div className="category-list">
        {["All items", ...categories].map((category) => (
          <button
            key={category}
            className={`category-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    )}
  </nav>
);

export default TopBar;
