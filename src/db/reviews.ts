import { faker } from '@faker-js/faker'

const reviews = [
  {
    id: 'review-1',
    firstName: 'J.',
    lastName: 'Davidson',
    email: 'jdavidson@domain.com',
    img: '',
    rating: 4,
    timestamp: faker.date.recent(),
    text: faker.lorem.paragraph()
  },
  {
    id: 'review-2',
    firstName: 'Mark',
    lastName: 'Vallance',
    email: 'mark@domain.com',
    img: '',
    rating: 2,
    timestamp: faker.date.recent(),
    text: faker.lorem.sentence()
  },
  {
    id: 'review-3',
    firstName: 'Sam',
    lastName: 'Lincoln',
    email: 'sam@domain.com',
    img: '',
    rating: 5,
    timestamp: faker.date.recent(),
    text: faker.lorem.paragraph()
  },
  {
    id: 'review-4',
    firstName: 'Helen',
    lastName: 'Rogers',
    email: 'helen@domain.com',
    img: '',
    rating: 3.5,
    timestamp: faker.date.recent(),
    text: faker.lorem.paragraph()
  },
  {
    id: 'review-5',
    firstName: 'Rita',
    lastName: 'Amber',
    email: 'rita@domain.com',
    img: '',
    rating: 4.5,
    timestamp: faker.date.recent(),
    text: faker.lorem.sentence()
  },
  {
    id: 'review-6',
    firstName: 'Lisa',
    lastName: 'Newman',
    email: 'newman@domain.com',
    img: '',
    rating: 5,
    timestamp: faker.date.recent(),
    text: faker.lorem.paragraph()
  },
  {
    id: 'review-7',
    firstName: 'Eva',
    lastName: 'Peters',
    email: 'peters@domain.com',
    img: '',
    rating: 3,
    timestamp: faker.date.recent(),
    text: faker.lorem.sentence()
  },
  {
    id: 'review-8',
    firstName: 'Grace',
    lastName: 'Mitchell',
    email: 'mitchell@domain.com',
    img: '',
    rating: 1,
    timestamp: faker.date.recent(),
    text: faker.lorem.paragraph()
  }
]

export default reviews
