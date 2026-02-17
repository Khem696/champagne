import { resolveProductImage } from '../../utils/imageUtils';
import champagneFluteData from './champagne_flute.json';
import champagneCoupeData from './champagne_coupe.json';

const products = [champagneFluteData, champagneCoupeData].map((p) => ({
  ...p,
  image: resolveProductImage(p.image)
}));

export const productList = products;
export const getProductById = (id) => products.find((p) => p.id === parseInt(id, 10));
