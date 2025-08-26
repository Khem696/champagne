// Utility function to get the correct image path based on environment
export const getImagePath = (imageName) => {
  // In development, use root path
  // In production, use /champagne/ path for AWS S3 deployment
  const basePath = process.env.NODE_ENV === 'production' ? '/champagne' : '';
  return `${basePath}/images/${imageName}`;
};

// Common image paths
export const IMAGES = {
  HERO_BG: getImagePath('hero-bg.png'),
  LOGO_DARK: getImagePath('logoDarkBg1.png'),
  CHAMPAGNE_FLUTE: getImagePath('ChampagneFlute.png'),
  CHAMPAGNE_COUPE: getImagePath('ChampagneCoupe.png'),
  CHAMPAGNE_FAT: getImagePath('champagne-fat.png'),
  PRODUCT_IMAGE: getImagePath('product-image.png'),
};
