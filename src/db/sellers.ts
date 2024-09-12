import { faker } from '@faker-js/faker'

const sellers = [
  {
    id: 'seller-1',
    logo: '',
    name: 'Albo E-Store',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'albo@email.com',
    rating: 3.5,
    profit: {
      electronics: 256340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 45741
  },
  {
    id: 'seller-2',
    logo: '',
    name: 'Asasio',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'asasio_store@email.com',
    rating: 5,
    profit: {
      electronics: 4874,
      fashion: 5874,
      food: 100547,
      services: 105
    },
    sales: 59874
  },
  {
    id: 'seller-3',
    logo: '',
    name: 'Ecom',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 4,
    profit: {
      electronics: 10547,
      fashion: 40877,
      food: 36954,
      services: 487
    },
    sales: 100574
  },
  {
    id: 'seller-4',
    logo: '',
    name: 'Delight',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 5,
    mainCategory: 'electronics',
    profit: {
      electronics: 10784,
      fashion: 5412,
      food: 12547,
      services: 99840
    },
    sales: 4545484
  },
  {
    id: 'seller-5',
    logo: '',
    name: 'Data Foundry',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 2.5,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 365844
  },
  {
    id: 'seller-6',
    logo: '',
    name: 'AV Solutions',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 4.5,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 69884
  },
  {
    id: 'seller-7',
    logo: '',
    name: 'Whale',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 365844
  },
  {
    id: 'seller-8',
    logo: '',
    name: 'Wood Cabins',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 5848412
  },
  {
    id: 'seller-9',
    logo: '',
    name: 'Academy',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 369874
  },
  {
    id: 'seller-10',
    logo: '',
    name: 'Liu & Jo',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 5848412
  },
  {
    id: 'seller-11',
    logo: '',
    name: 'Oakley Store',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 58410
  },
  {
    id: 'seller-12',
    logo: '',
    name: 'Dakine LCC',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 802
  },
  {
    id: 'seller-13',
    logo: '',
    name: 'TigerTool',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 2404
  },
  {
    id: 'seller-14',
    logo: '',
    name: 'Public Trendy',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 90084
  },
  {
    id: 'seller-15',
    logo: '',
    name: 'Market Reveal',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 487512
  },
  {
    id: 'seller-16',
    logo: '',
    name: 'Workplace Solutions',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 90887
  },
  {
    id: 'seller-17',
    logo: '',
    name: 'Arca Solutions, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 56848441
  },
  {
    id: 'seller-18',
    logo: '',
    name: 'SC Project',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 36955
  },
  {
    id: 'seller-19',
    logo: '',
    name: 'Diriag Foods',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 25454
  },
  {
    id: 'seller-20',
    logo: '',
    name: 'SmartFoods LCC',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 60887
  },
  {
    id: 'seller-21',
    logo: '',
    name: 'Midimd Electronics',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 978
  },
  {
    id: 'seller-22',
    logo: '',
    name: 'Fanellini Fashion',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 69558
  },
  {
    id: 'seller-23',
    logo: '',
    name: 'Minerva Professional',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 30065
  },
  {
    id: 'seller-24',
    logo: '',
    name: 'Cancon Industries, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 21015
  },
  {
    id: 'seller-25',
    logo: '',
    name: 'Wonder Trade',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 10000
  },
  {
    id: 'seller-26',
    logo: '',
    name: 'Imagination, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 5000
  },
  {
    id: 'seller-27',
    logo: '',
    name: 'Rinni Candle Co.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 1000
  },
  {
    id: 'seller-28',
    logo: '',
    name: 'Seluid Foods Trade',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 100258
  },
  {
    id: 'seller-29',
    logo: '',
    name: 'Agro Irilee, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 1548
  },
  {
    id: 'seller-30',
    logo: '',
    name: 'Agro Tech, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 2905
  },
  {
    id: 'seller-31',
    logo: '',
    name: 'Sorelli',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 3665
  },
  {
    id: 'seller-32',
    logo: '',
    name: 'Doneriald Aquatech, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 999
  },
  {
    id: 'seller-33',
    logo: '',
    name: 'Hioh Tech, Inc.',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 6958
  },
  {
    id: 'seller-34',
    logo: '',
    name: 'Marco Industries',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 69877
  },
  {
    id: 'seller-35',
    logo: '',
    name: 'Tesco Trader',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 58841
  },
  {
    id: 'seller-36',
    logo: '',
    name: 'Mintesso',
    website: 'https://1.envato.market/tf-merkulove',
    address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
    phone: faker.helpers.fromRegExp('+1(###) ###-####'),
    email: 'emailalbo_store@email.com',
    rating: 3,
    profit: {
      electronics: 6340,
      fashion: 2520,
      food: 12100,
      services: 5000
    },
    sales: 99
  }
]

export default sellers
