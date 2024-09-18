const orders = [
  {
    orderNumber: 123456,
    ticket: '123456FR',
    status: 'completed',
    rating: 3.5,
    category: 'electronics',
    payment: {
      amount: 600,
      received: 600
    },
    product: {
      name: 'Oculus Quest 2 VR Headset 64 GB',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 600,
      sale_price: 559
    }
  },
  {
    orderNumber: 154844,
    ticket: '598741FR',
    status: 'confirmed',
    rating: 4.5,
    category: 'fashion',
    payment: {
      amount: 4000,
      received: 180
    },
    product: {
      name: 'Levis Standard Issue Backpack Black',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 100
    }
  },
  {
    orderNumber: 202587,
    ticket: '485912TY',
    status: 'cancelled',
    rating: 4.5,
    category: 'electronics',
    payment: {
      amount: 200,
      received: 0
    },
    product: {
      name: 'Xiaomi WiFI Repeater Pro',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 200,
      sale_price: 180
    }
  },
  {
    orderNumber: 300411,
    ticket: '365487RT',
    status: 'confirmed',
    rating: 4.5,
    category: 'services',
    payment: {
      amount: 9.99,
      received: 9.99
    },
    product: {
      name: 'UPS Express Shipping',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 9.99
    }
  },
  {
    orderNumber: 785241,
    ticket: '002315ES',
    status: 'confirmed',
    rating: 4.5,
    category: 'fashion',
    payment: {
      amount: 40,
      received: 40
    },
    product: {
      name: 'Parfois Woman Flower Backpack',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 20,
      sale_price: 15.99
    }
  },
  {
    orderNumber: 458745,
    ticket: '541125FR',
    status: 'completed',
    rating: 0,
    category: 'food',
    payment: {
      amount: 129.54,
      received: 129.54
    },
    product: {
      name: 'Goodwill Sanctuary Sanca Olive Oil 5L',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 129.54
    }
  },
  {
    orderNumber: 105488,
    ticket: '252596FR',
    status: 'confirmed',
    rating: 5,
    category: 'food',
    payment: {
      amount: 78.99,
      received: 52.18
    },
    product: {
      name: 'Guylian Seashells Belgian Chocolate 1kg',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 78.99,
      sale_price: 69.99
    }
  },
  {
    orderNumber: 900541,
    ticket: '002315BN',
    status: 'cancelled',
    rating: 0,
    category: 'fashion',
    payment: {
      amount: 118.99,
      received: 0
    },
    product: {
      name: 'Puma Crossbody Bag Black Unisex',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 118.99,
      sale_price: 99.99
    }
  },
  {
    orderNumber: 121844,
    ticket: '814315LP',
    status: 'refunded',
    rating: 0,
    category: 'services',
    payment: {
      amount: 9.99,
      received: 0
    },
    product: {
      name: 'Sustainable packaging services for 1 item',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 9.99
    }
  },
  {
    orderNumber: 240412,
    ticket: '361087RT',
    status: 'completed',
    rating: 4.5,
    category: 'electronics',
    payment: {
      amount: 200,
      received: 200
    },
    product: {
      name: 'SteamDeck Gaming Console 64 GB',
      image: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      regular_price: 200,
      sale_price: 180
    }
  }
]

export default orders
