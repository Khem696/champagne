// Utility function to get the correct icon path based on environment
export const getIconPath = (iconName) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/champagne' : '';
  return `${basePath}/icons/${iconName}`;
};

// Common icon paths
export const ICONS = {
  TEL_ICON: getIconPath('icon_Tel_Champagne.svg'),
  LINE_ICON: getIconPath('icon_Line_Champagne.svg'),
  EMAIL_ICON: getIconPath('icon_Mail_Champagne.svg'),
  LINE_QR_ICON: getIconPath('qr_Line_Champagne.svg'),
  BOTTLE_ICON: getIconPath('bottleLogo.png'),
};
