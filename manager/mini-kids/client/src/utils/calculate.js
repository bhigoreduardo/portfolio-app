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

export const optionsLocaleDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const cpfMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const cnpjMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const rgMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d+?$)/, '$1')
}

export const ieMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{1})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{7})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const phoneMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d+?$)/, '$1')
}

export const mobileMask = value => {
  return value
    .replace(/\D/g,'')
    .replace(/(\d{2})(\d)/,'($1) $2')
    .replace(/(\d)(\d{4})$/,'$1-$2')
}

export const cepMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(\d{3})(\d+?$)/, '$1')
}