import { faker } from '@faker-js/faker'

const messages = [
  {
    id: 'message-1',
    content: 'Sự kiện này tổ chức ở đâu vậy',
    createdAt: faker.date.recent(),
    sender: {
      fullName: 'Trần Phước Anh Quốc',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-2',
    content: 'Sự kiện này có bao nhiêu người tham gia vậy',
    createdAt: faker.date.recent(),
    sender: {
      fullName: 'Trần Vương Duy',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-3',
    content: 'Tôi thấy sự kiện này bán vé đắt quá, giảm giá dược không',
    createdAt: faker.date.recent(),
    sender: {
      fullName: 'Mai Đình Khôi',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-4',
    content: 'Tại sao sự kiện này lại tổ chức ở đây',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Lê Thị Thu Hiền',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-5',
    content: 'Tôi rất thích sự kiện này',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Trương Nguyễn Phước Trí',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-6',
    content: 'Sự kiện này nhảy hay âm nhạc vậy',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Hồ Thị Thanh Thảo',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-7',
    content: 'Trần Ngọc Nhật Vy',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Anh Quoc',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-8',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Lê Trương Ngọc Hải',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-9',
    content:
      'Tôi lỡ mua vé rồi nhưng không muốn tham gia nữa thì phải lam sao đây',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Trần Minh Chính',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-10',
    content: 'Love you',
    createdAt: faker.date.past(),
    sender: {
      fullName: 'Võ Xuân Thảo',
      avatar:
        'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  }
]

export default messages
