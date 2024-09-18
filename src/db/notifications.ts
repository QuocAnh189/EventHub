import { faker } from '@faker-js/faker'

const notifications = [
  {
    id: 'notification-1',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Offers',
    text: 'Quốc đã đặt vé của bạn',
    user: {
      fullName: 'Trần Phước Anh Quốc',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-2',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Referral link',
    text: 'Duy đã theo dõi bạn',
    user: {
      fullName: 'Trần Vương Duy',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-3',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Referral link',
    text: 'Hiền đã theo dõi bạn',
    user: {
      fullName: 'Lê Thị Thu Hiền',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-4',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Electronics',
    text: 'Trí đã đặt vé của bạn',
    user: {
      fullName: 'Trương Nguyễn Phước Trí',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-5',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Electronics',
    text: 'Khôi đã đặt vé của bạn',
    user: {
      fullName: 'Mai Đình Khôi',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-6',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Subscriptions',
    text: 'Trí đã theo dõi bạn',
    user: {
      fullName: 'Trương Nguyễn Phước Trí',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-7',
    timestamp: faker.date.past(),
    category: 'follow',
    subcategory: 'Subscriptions',
    text: 'Chính đã theo dõi bạn',
    user: {
      fullName: 'Trần Minh Chính',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  }
]

export default notifications
