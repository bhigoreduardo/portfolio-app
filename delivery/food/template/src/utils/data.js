export const category = {
  _id: "lkad128djaskdljsads",
  name: "Lanches",
  status: "Ativo",
  products: 70,
};

export const product = {
  _id: "lkad128djaskdljsads",
  name: "X-Bacon",
  category: "Lanches",
  price: 20.99,
  promotion: 16.99,
  image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
  status: "Ativo",
  reviewsAvg: 4.38,
  description: "PÃO, ALFACE, CEBOLA, BACON, BIFE, MAIONESE",
}

export const customer = {
  _id: "lkad128djaskdljsads",
  name: "John Doe",
  email: "johndoe@email.com",
  mobile: "(11) 9 9999-999",
  address: {
    street: "Rua do John Doe",
    neighborhood: "Bairro John",
    number: "123",
    city: "Cidade John",
    state: "RJ",
    zipCode: "123456-789",
    complement: "Perto da sorveteria"
  },
  status: "Ativo",
}

export const order = {
  _id: "lkad128djaskdljsads",
  customer: {
    name: "John Doe",
    mobile: "(11) 9 9999-9999",
    address: {
      street: "Rua do John Doe",
      neighborhood: "Bairro John",
      number: "123",
      city: "Cidade John",
      state: "RJ",
      zipCode: "123456-789",
      complement: "Perto da sorveteria"
    },
  },
  cart: [
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Bacon",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 2,
      price: 12.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    }
  ],
  shipping: {
    method: "Entrega",
    neighborhood: "Bairro do John",
    price: 2.99,
  },
  payment: {
    method: "Dinheiro - A VISTA",
    amount: 20.00,
    moneyChange: 50,
    status: "Pendente",
  },
  status: { type: "pending", dateTime: new Date().toLocaleTimeString() },
  // status: { type: "pending", dateTime: new Date().toLocaleDateString("pt-BR", optionsLocaleDate) },
  payload: "Retirar a cebola do lanche",
}

export const bartending = {
  _id: "lkad128djaskdljsads",
  name: "Mesa 1",
  cart: [
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Bacon",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 2,
      price: 12.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    },
    {
      product: {
        _id: "lkad128djaskdljsads",
        name: "X-Total",
        image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
      },
      quantity: 5,
      price: 19.99,
    }
  ],
  status: { type: "open", dateTime: new Date().toLocaleTimeString() },
}

export const neighborhood = { value: "bairro do john", label: "Bairro do John"};

export const billboard = {
  _id: "lkad128djaskdljsads",
  image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
  description: "Lotem ipsum et dolar al sucum lotus ipem"
}