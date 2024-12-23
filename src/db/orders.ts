import { faker } from '@faker-js/faker'

const orders = [
  {
    created_at: faker.date.past(),
    status: 'waiting',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Ecom',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Ecom',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'cancelled',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Delight',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'rejected',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Delight',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Whale',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Academy',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Academy',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'cancelled',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Oakley Store',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Oakley Store',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  },
  {
    created_at: faker.date.past(),
    status: 'approved',
    ticketQuantity: 2,
    totalPrice: 100,
    discountPrice: '20',
    finalPrice: 80,
    event: {
      name: 'Albo E-Store',
      coverImageUrl: ''
    },
    user: {
      userName: 'Anh Quoc',
      avatarUrl: ''
    }
  }
]

export default orders
