export const formatPoints = (num?: number): string =>
  num ? num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.00';

export const formatDate = (dateString: string): string => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' as const };
  const date = new Date(dateString);
  const result = date.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);

  return result.replace(/(\d+)\s+de\s+(\w+)\s+de\s+(\d+)/, '$1 de $2, $3');
};
