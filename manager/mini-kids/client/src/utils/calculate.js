export const stockAmount = (id, variates) =>
  variates.filter((item) => item.productId === id).reduce((acc, cur) => acc + cur.stock, 0);

export const stockCount = (id, variates) =>
  variates.filter((item) => item.productId === id).length;

export const priceVariateAmount = (id, variates) =>
  variates.filter((item) => item.productId === id).reduce((acc, cur) => acc + cur.price, 0);

export const priceVariateAvg = (id, variates) =>
  priceVariateAmount(id, variates)/stockCount(id, variates);

export const currencyPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});