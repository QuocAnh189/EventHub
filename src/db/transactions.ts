import { faker } from '@faker-js/faker'

const transactions = [
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Visa',
    type: faker.finance.transactionType(),
    status: 'waiting',
    country: 'USA',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Albo E-Store',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Visa',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'USA',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Ecom',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Maestro',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'Australia',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Albo E-Store',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'PayPal',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'Israel',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Ecom',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Switch',
    type: faker.finance.transactionType(),
    status: 'cancelled',
    country: 'Italy',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Delight',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Visa',
    type: faker.finance.transactionType(),
    status: 'rejected',
    country: 'USA',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Delight',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Mastercard',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'France',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Whale',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'PayPal',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'France',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Academy',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Visa',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'Latvia',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Academy',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'PayPal',
    type: faker.finance.transactionType(),
    status: 'cancelled',
    country: 'Poland',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Oakley Store',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Maestro',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'Canada',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Oakley Store',
      logo: ''
    }
  },
  {
    sku: faker.finance.accountNumber(5),
    timestamp: faker.date.past(),
    method: 'Mastercard',
    type: faker.finance.transactionType(),
    status: 'approved',
    country: 'Sweden',
    currency: faker.finance.currencyCode(),
    fee: faker.finance.amount(1, 10000, 2),
    tax: faker.finance.amount(0, 1, 1),
    seller: {
      name: 'Albo E-Store',
      logo: ''
    }
  }
]

export default transactions
