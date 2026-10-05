// Sizes come from PK 260926.pdf. Prices are confirmed by the club;
// the supplier's batch prices are not individual retail prices.
const images = (prefix, views) => views.map((view) => ({
  src: `/images/merch/${prefix}-${view}.webp`,
  thumbnail: `/images/merch/thumbs/${prefix}-${view}.webp`,
  label: view.replaceAll("-", "_"),
}));
const fullGallery = ["product-front", "product-back", "on-model-front", "on-model-back"];
const trousersGallery = ["product-front", "product-back"];

export const merchProducts = [
  { slug: "kids-tshirt", key: "kidsTshirt", audience: "kids", category: "tshirts", model: "Bahrain", sizes: ["8", "12"], ageSizes: true, color: "white", material: "polyester", weight: 135, images: images("01-bahrain-kids-tshirt", fullGallery) },
  { slug: "men-tshirt", key: "menTshirt", audience: "men", category: "tshirts", model: "Bahrain", sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"], color: "white", material: "polyester", weight: 135, images: images("02-bahrain-men-tshirt", fullGallery) },
  { slug: "women-tshirt", key: "womenTshirt", audience: "women", category: "tshirts", model: "Bahrain", sizes: ["S", "M", "L", "XL", "2XL"], color: "white", material: "polyester", weight: 135, images: images("03-bahrain-women-tshirt", fullGallery) },
  { slug: "kids-shorts", key: "kidsShorts", audience: "kids", category: "shorts", model: "Player", sizes: ["4", "8", "12"], ageSizes: true, color: "navy", material: "polyester", weight: 140, images: images("04-player-kids-shorts", ["product-front", "on-model-front"]) },
  { slug: "unisex-shorts", key: "unisexShorts", audience: "unisex", category: "shorts", model: "Player", sizes: ["M", "L", "XL", "2XL"], color: "navy", material: "polyester", weight: 140, images: images("05-player-unisex-shorts", ["product-front"]) },
  { slug: "kids-hoodie", key: "kidsHoodie", audience: "kids", category: "hoodies", model: "Kids", sizes: ["3/4", "5/6", "7/8", "9/10", "11/12"], ageSizes: true, color: "navy", material: "cotton50", weight: 280, images: images("06-kids-hoodie", fullGallery) },
  { slug: "men-hoodie", key: "menHoodie", audience: "men", category: "hoodies", model: "Urban", sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"], color: "navy", material: "cotton50", weight: 280, images: images("07-urban-men-hoodie", fullGallery) },
  { slug: "women-hoodie", key: "womenHoodie", audience: "women", category: "hoodies", model: "Urban", sizes: ["S", "M", "L", "XL", "2XL"], color: "navy", material: "cotton50", weight: 280, images: images("08-urban-women-hoodie", fullGallery) },
  { slug: "kids-trousers", key: "kidsTrousers", audience: "kids", category: "trousers", model: "Adelpho", sizes: ["3/4", "5/6", "7/8", "9/10", "11/12"], ageSizes: true, color: "navy", material: "cotton60", weight: 280, images: images("09-adelpho-kids-trousers", trousersGallery) },
  { slug: "men-trousers", key: "menTrousers", audience: "men", category: "trousers", model: "Adelpho", sizes: ["S", "M", "L", "XL", "2XL", "3XL"], color: "navy", material: "cotton60", weight: 280, images: images("10-adelpho-men-trousers", trousersGallery) },
  { slug: "women-trousers", key: "womenTrousers", audience: "women", category: "trousers", model: "Adelpho", sizes: ["S", "M", "L", "XL", "2XL"], color: "navy", material: "cotton60", weight: 280, images: images("11-adelpho-women-trousers", trousersGallery) },
].map((product, index) => ({
  ...product,
  sku: `MFC-${String(index + 1).padStart(2, "0")}`,
  sizeGuide: `/images/merch/size-guides/${String(index + 1).padStart(2, "0")}.webp`,
}));

export const getMerchProduct = (slug) => merchProducts.find((product) => product.slug === slug);
export const sizeLabel = (product, size, t) => product.ageSizes ? t("ageSize", { size }) : size;
