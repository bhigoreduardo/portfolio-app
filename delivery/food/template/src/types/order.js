export const orderEnum = [
  { value: "pending", label: "Pendente" },
  { value: "accept", label: "Aceito" },
  { value: "canceled", label: "Cancelado" },
  { value: "delivery", label: "Em transporte" },
  { value: "delivered", label: "Entregue" },
];

export const shippingEnum = [
  { value: "delivery", label: "Entrega" },
  { value: "pick-up-on-store", label: "Retirar no local" },
];

export const paymentEnum = [
  { value: "credit-card", label: "Cartão de crédito" },
  { value: "pix", label: "PIX" },
  { value: "cash", label: "Dinheiro" },
  { value: "bank-transfer", label: "Transferência bancária" },
];