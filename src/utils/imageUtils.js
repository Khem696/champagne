// Utility function to get the correct image path based on environment
export const getImagePath = (imageName) => {
  // In development, use root path
  // In production, use /champagne/ path for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/champagne' : '';
  return `${basePath}/images/${imageName}`;
};

// Resolve product image path from JSON (e.g. "/images/ChampagneFlute.png" -> correct path)
export const resolveProductImage = (imagePath) => {
  if (!imagePath) return '';
  const filename = imagePath.split('/').pop();
  return getImagePath(filename);
};

// Common image paths
export const IMAGES = {
  CONTACT_HERO_BG: getImagePath('contact_us_sign_hero_bg.png'),
  LOGO_DARK: getImagePath('logoDarkBg1.png'),
  CHAMPAGNE_FLUTE: getImagePath('ChampagneFlute.png'),
  CHAMPAGNE_COUPE: getImagePath('ChampagneCoupe.png'),
  CHAMPAGNE_FAT: getImagePath('champagne-fat.png'),
  PRODUCT_IMAGE: getImagePath('product-image.png'),
  HERO_BG: getImagePath('cover_slide1.jpg'),
};
