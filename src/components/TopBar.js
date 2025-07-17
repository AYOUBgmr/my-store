import { useMemo } from "react";

// كل روابط الصور الـ 15 التي زودتني بها
const sampleImages = [
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1749493117/Oulmes_classic_33cl_x12_dqumoo.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1749493117/Oulmes_mjito_33cl_x12_fn9frc.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1749493117/Oulmes_orange_33cl_x12_z4mciq.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1747994490/ciel_0_5l_12_dcksqe.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430076/ain_atlas_33cl_x12_hdcr3o.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430030/ain_saiss_33cl_x12_leejqc.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430053/sidi_ali_33cl_x12_cgwgfo.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430076/ain_atlas_50cl_x12_emlx9v.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430050/ain_ifrane_50cl_x12_k2rzg9.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1749493117/Ain_sais_d%C3%A9lice_50cl_x12_br8w9e.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430030/ain_saiss_50cl_x12_cmcngp.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430101/aquafina_50cl_x12_ddxszq.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430061/oulmes_50cl_x12_r43vwj.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430182/sidi_ali_50cl_x12_t2ouwz.webp",
  "https://res.cloudinary.com/dtfd1qbbi/image/upload/v1748430062/sidi_harazem_50cl_x12_aplcci.webp"
];

const TopBar = ({
  searchTerm,
  setSearchTerm,
  toggleCategoryMenu,
  categoryMenuVisible,
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  const categoryImages = useMemo(() => {
    const shuffled = [...sampleImages].sort(() => 0.5 - Math.random());
    const result = {};
    ["All items", ...categories].forEach((cat, i) => {
      result[cat] = shuffled[i % shuffled.length];
    });
    return result;
  }, [categories]);

  return (
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
                src={categoryImages[category]}
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
};

export default TopBar;
