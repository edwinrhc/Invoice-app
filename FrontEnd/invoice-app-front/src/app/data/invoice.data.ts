import {Invoice} from "../models/invoice";

export const invoiceData: any = {

  //nuestro json
    id: 1,
    name: 'Componente de PC',
    client: {
        name: 'Edwin',
        lastname: 'HC',
        address: {
          country: 'PE',
          city: 'Lima',
          street: 'Lima',
          number: 15
        }
    },
  company: {
      name: 'New Age',
      fiscalNumber: 12312
  },
  items: [
    {
      id:1,
      product: 'CPU Inter i9',
      price: 2599,
      quantity: 1
    },
    {
      id:2,
      product: 'Corsair Teclado Mecanico',
      price: 799,
      quantity: 2
    },
    {
      id:3,
      product: 'Monitor Asus',
      price: 899,
      quantity: 3
    }

  ]


}
