import { ProductDetailScreenParams } from '@routing/types';

export const formatPoints = (num?: number): string =>
  num ? num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.00';

export const formatDate = (dateString: string): string => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' as const };
  const date = new Date(dateString);
  const result = date.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);

  return result.replace(/(\d+)\s+de\s+(\w+)\s+de\s+(\d+)/, '$1 de $2, $3');
};

export const updatePoints = (products: ProductDetailScreenParams[]): number => {
  const pointsToAdd =
    products &&
    products.reduce((sum, item) => {
      if (item.is_redemption === false) {
        return sum + item.points;
      } else {
        return sum - item.points;
      }
    }, 0);

  return pointsToAdd;
};

export const filterProductsByRedemption = (
  products: ProductDetailScreenParams[]
): { redemption: ProductDetailScreenParams[]; nonRedemption: ProductDetailScreenParams[] } => {
  const redemption = products.filter((item) => item.is_redemption);
  const nonRedemption = products.filter((item) => !item.is_redemption);

  return {
    redemption,
    nonRedemption,
  };
};
