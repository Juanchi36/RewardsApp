export const formatPoints = (num?: number): string =>
  num ? num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.00';
