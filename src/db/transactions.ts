import { faker } from '@faker-js/faker'

const transactions = [
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'waiting',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Ecom',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Ecom',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'cancelled',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Delight',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'rejected',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Delight',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Whale',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Academy',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Academy',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'cancelled',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Oakley Store',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Oakley Store',
      coverImageUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    customerName: 'Anh Quoc',
    status: 'approved',
    quantity: 2,
    totalPrice: 100,
    discount: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    }
  }
]

export default transactions
