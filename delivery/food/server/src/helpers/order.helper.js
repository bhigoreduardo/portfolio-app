import Product from "../models/product.model.js";
import Store from "../models/store.model.js";

const getCartValues = (cart) => {
  let amount = 0;
  let quantity = 0;

  cart.map((item) => {
    amount += item.unityPrice * item.quantity;
    quantity += quantity;
  });

  return { amount, quantity };
};

const getStoreValues = async (cart, store) => {
  const storeCart = await Promise.all(
    cart.map(async (item) => {
      const product = await Product.findOne({ _id: item.product, store });

      let amount = 0;
      let quantity = 0;

      if (product) {
        const price = product.promotion || product.price;
        amount += price * item.quantity;
        quantity += item.quantity;
      }

      return { amount, quantity };
    })
  );

  const amount = storeCart.reduce((acc, cur) => acc + cur.amount, 0);
  const quantity = storeCart.reduce((acc, cur) => acc + cur.quantity, 0);
  return { amount, quantity };
};

export const cartValidation = async (cart, store) => {
  const { amountCart, quantityCart } = getCartValues(cart);
  const { amountStore, quantityStore } = getStoreValues(cart, store);

  const isValidate =
    amountCart === amountStore && quantityCart === quantityStore;

  return { amountStore, isValidate };
};

export const shippingValidation = async (shipping, store) => {
  const finded = await Store.findById(store).select("settings");
  const shippingStore = finded?.shipping.find((item) => item.neighborhood === shipping.neighborhood)
  const isValidate = shippingStore.price === shipping.price;
  
  return { shippingStore, isValidate }
}