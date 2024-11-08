import { faker } from '@faker-js/faker'

const invitations = [
  {
    id: 'invitation-1',
    timestamp: faker.date.recent(),
    text: 'Quốc đã mời bạn thích sự kiện',
    user: {
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'invitation-2',
    timestamp: faker.date.recent(),
    text: 'Duy đã mời bạn thích sự kiện',
    user: {
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'invitation-3',
    timestamp: faker.date.recent(),
    text: 'Thảo đã mời bạn thích sự kiện',
    user: {
      fullName: 'Lê Thị Thanh Thảo',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'invitation-4',
    timestamp: faker.date.recent(),
    text: 'Trí đã mời bạn thích sự kiện',
    user: {
      fullName: 'Trương Nguyễn Phước Trí',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  }
]

export default invitations
