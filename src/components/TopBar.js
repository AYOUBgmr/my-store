const TopBar = ({ searchTerm, setSearchTerm, toggleCategoryMenu }) => (
  <nav className="top-bar">
    <button id="categoryBtn" onClick={toggleCategoryMenu}>الفئات</button>
    <input
      type="text"
      id="searchInput"
      placeholder="ابحث عن المنتجات..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </nav>
);

export default TopBar;
