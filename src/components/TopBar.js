const categoryImageMap = {
  "All items": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186452/all_items_zxuuoo.webp",
  "مياه ومشروبات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D9%85%D9%8A%D8%A7%D9%87_%D9%88_%D9%85%D8%B4%D8%B1%D9%88%D8%A8%D8%A7%D8%AA_h1g7cd.webp",
  "جبن والبان": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186450/%D8%AC%D8%A8%D9%86_%D9%88_%D8%A7%D9%84%D8%A8%D8%A7%D9%86_dsg8te.webp",
  "صلصات ومربى": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186436/%D8%B5%D9%84%D8%B5%D8%A7%D8%AA_%D9%88%D9%85%D8%B1%D8%A8%D9%89_f538hd.webp",
  "زيوت": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186436/%D8%B2%D9%8A%D9%88%D8%AA_nboqiy.webp",
  "منضفات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D9%85%D9%86%D8%B6%D9%81%D8%A7%D8%AA_g6oper.webp",
  "عجائن ودقيق": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D8%B9%D8%AC%D8%A7%D8%A6%D9%86_%D9%88%D8%AF%D9%82%D9%8A%D9%82_dpysvw.webp",
  "بسكوي - مقرمشات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186451/%D8%A8%D8%B3%D9%83%D9%88%D9%8A_-_%D9%85%D9%82%D8%B1%D9%85%D8%B4%D8%A7%D8%AA_ngznjv.webp",
  "خمائر وشوكولاته": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186450/%D8%AE%D9%85%D8%A7%D8%A6%D8%B1_%D9%88%D8%B4%D9%88%D9%83%D9%88%D9%84%D8%A7%D8%AA%D9%87_s8iyvy.webp",
  "معلبات اسماك ولحوم": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D9%85%D8%B9%D9%84%D8%A8%D8%A7%D8%AA_%D8%A7%D8%B3%D9%85%D8%A7%D9%83_%D9%88%D9%84%D8%AD%D9%88%D9%85_fezga4.webp",
  "سكر وشاي قهوه": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186436/%D8%B3%D9%83%D8%B1_%D9%88%D8%B4%D8%A7%D9%8A_%D9%82%D9%87%D9%88%D9%87_iqsph3.webp",
  "مناديل وحفاضات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D9%85%D9%86%D8%A7%D8%AF%D9%8A%D9%84_%D9%88%D8%AD%D9%81%D8%A7%D8%B6%D8%A7%D8%AA_cmv0oo.webp",
  "فواكه مجففه وبقوليات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186435/%D9%81%D9%88%D8%A7%D9%83%D9%87_%D9%85%D8%AC%D9%81%D9%81%D9%87_%D9%88%D8%A8%D9%82%D9%88%D9%84%D9%8A%D8%A7%D8%AA_kkylmb.webp",
  "توابل وبهارات": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186451/%D8%AA%D9%88%D8%A7%D8%A8%D9%84_%D9%88%D8%A8%D9%87%D8%A7%D8%B1%D8%A7%D8%AA_lz0typ.webp",
  "اغراض منزليه": "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1753186451/%D8%A7%D8%BA%D8%B1%D8%A7%D8%B6_%D9%85%D9%86%D8%B2%D9%84%D9%8A%D9%87_bknlvy.webp"
};

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
      <div className="category-list with-images">
        {["All items", ...categories].map((category) => (
          <button
            key={category}
            className={`category-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            <img
              src={categoryImageMap[category] || ""}
              alt={category}
              className="category-image"
            />
            <span>{category}</span>
          </button>
        ))}
      </div>
    )}
  </nav>
);

export default TopBar;
