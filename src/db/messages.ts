import { faker } from '@faker-js/faker'

const messages = [
  {
    id: 'message-1',
    content: 'Sự kiện này tổ chức ở đâu vậy',
    createdAt: faker.date.recent(),
    sender: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    receiver: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    attachments: []
  },
  {
    id: 'message-2',
    content: 'Sự kiện này tổ chức tại thành phố Hồ Chí Minh',
    createdAt: faker.date.recent(),
    sender: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    receiver: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    attachments: []
  },
  {
    id: 'message-1',
    content: 'Quy mô sự kiện này gồm bao nhiêu người',
    createdAt: faker.date.recent(),
    sender: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    receiver: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    attachments: []
  },
  {
    id: 'message-2',
    content: 'Sự kiện có hơn 3000 người tham dự',
    createdAt: faker.date.recent(),
    sender: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    receiver: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    attachments: []
  },
  {
    id: 'message-1',
    content: 'Tại sao tôi không thấy giá của sự kiện này',
    createdAt: faker.date.recent(),
    sender: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    receiver: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    attachments: []
  },
  {
    id: 'message-2',
    content: 'Giá của sự kiện này đang cập nhập và chúng tôi sẽ đề cập lại sau',
    createdAt: faker.date.recent(),
    sender: {
      id: '2',
      fullName: 'Trần Vương Duy',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1729096963/portfolio/user/mzrgkwrrdp2rvbmvceff.jpg'
    },
    receiver: {
      id: '1',
      fullName: 'Trần Phước Anh Quốc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    attachments: []
  }
]

export default messages
