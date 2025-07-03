const CategoryMenu = ({ visible, categories, selectedCategory, setSelectedCategory, hideMenu }) => (
  <div id="categoryMenu" className={`category-menu ${visible ? "show" : "hidden"}`}>
    <ul id="categoryMenuList">
      <li
        onClick={() => {
          setSelectedCategory("All items");
          hideMenu();
        }}
        style={{ cursor: "pointer" }}
      >
        All items
      </li>
      {categories.map((cat) => (
        <li
          key={cat}
          onClick={() => {
            setSelectedCategory(cat);
            hideMenu();
          }}
          style={{ cursor: "pointer" }}
        >
          {cat}
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryMenu;
