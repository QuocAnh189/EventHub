import { EEventPaymentTicket, EEventStyle, EEventStatus } from '@constants/enum.constant'

const events = [
  {
    id: '1',
    name: 'Music With UIT',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
        name: 'Music',
        backgroundColor: 'orange'
      }
    ],
    coverImage:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
    priceRange: { startRange: 100 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2', 'This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '2',
    name: 'Music With UEH',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
        name: 'Music',
        backgroundColor: 'orange'
      }
    ],
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
    priceRange: { startRange: 200 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '3',
    name: 'Music In Live',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/ltf9kjwcm9flsr9kava1.png',
        name: 'Music',
        backgroundColor: 'orange'
      }
    ],
    coverImage: 'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
    priceRange: { startRange: 180 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
      'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
      'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
      'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '4',
    name: 'Sport In UIT',
    categoryIds: ['2'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
        name: 'Sport',
        backgroundColor: 'purple'
      }
    ],
    coverImage: 'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid',
    priceRange: { startRange: 300 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid',
      'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid',
      'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid',
      'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '5',
    name: 'Sport In UEH',
    categoryIds: ['2'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
        name: 'Sport',
        backgroundColor: 'purple'
      }
    ],
    coverImage: 'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2',
    priceRange: { startRange: 120 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2',
      'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2',
      'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2',
      'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '6',
    name: 'Sport In Live',
    categoryIds: ['2'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505726/eventhub/category/zs0q5wmitcvihqjgm0ov.png',
        name: 'Sport',
        backgroundColor: 'purple'
      }
    ],
    coverImage: 'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg',
    priceRange: { startRange: 150 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg',
      'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg',
      'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg',
      'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: false,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '7',
    name: 'Workshop with UIT',
    categoryIds: ['2'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
        name: 'Workshop',
        backgroundColor: 'green'
      }
    ],
    coverImage:
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg',
    priceRange: { startRange: 100 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg',
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg',
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg',
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '8',
    name: 'Workshop with UEH',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
        name: 'Workshop',
        backgroundColor: 'green'
      }
    ],
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s',
    priceRange: { startRange: 120 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '9',
    name: 'Workshop Technology',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505724/eventhub/category/dze7rcjxmhbiyuxp0nms.png',
        name: 'Workshop',
        backgroundColor: 'green'
      }
    ],
    coverImage: 'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg',
    priceRange: { startRange: 140 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg',
      'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg',
      'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg',
      'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '10',
    name: 'Food With UIT',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505731/eventhub/category/xngndezflobwdhyds2dl.png',
        name: 'Food',
        backgroundColor: 'yellow'
      }
    ],
    coverImage:
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg',
    priceRange: { startRange: 160 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg',
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg',
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg',
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '11',
    name: 'Food With UEH',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505731/eventhub/category/xngndezflobwdhyds2dl.png',
        backgroundColor: 'yellow'
      }
    ],
    coverImage:
      'https://amazingfoodanddrink.com/wp-content/uploads/2022/10/a-vibrant-and-lively-outdoor-food-festival-scene-w-Im60X1KFQ12louNEI8Nj7g-2XGmCU7lRTqgxZsfmMQ7Pw.jpeg',
    priceRange: { startRange: 160 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://amazingfoodanddrink.com/wp-content/uploads/2022/10/a-vibrant-and-lively-outdoor-food-festival-scene-w-Im60X1KFQ12louNEI8Nj7g-2XGmCU7lRTqgxZsfmMQ7Pw.jpeg',
      'https://amazingfoodanddrink.com/wp-content/uploads/2022/10/a-vibrant-and-lively-outdoor-food-festival-scene-w-Im60X1KFQ12louNEI8Nj7g-2XGmCU7lRTqgxZsfmMQ7Pw.jpeg',
      'https://amazingfoodanddrink.com/wp-content/uploads/2022/10/a-vibrant-and-lively-outdoor-food-festival-scene-w-Im60X1KFQ12louNEI8Nj7g-2XGmCU7lRTqgxZsfmMQ7Pw.jpeg',
      'https://amazingfoodanddrink.com/wp-content/uploads/2022/10/a-vibrant-and-lively-outdoor-food-festival-scene-w-Im60X1KFQ12louNEI8Nj7g-2XGmCU7lRTqgxZsfmMQ7Pw.jpeg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    id: '12',
    name: 'Food In Live',
    categoryIds: ['1'],
    categories: [
      {
        iconImageUrl:
          'https://res.cloudinary.com/dadvtny30/image/upload/v1713505731/eventhub/category/xngndezflobwdhyds2dl.png',
        name: 'Food',
        backgroundColor: 'yellow'
      }
    ],
    coverImage:
      'https://res.cloudinary.com/simpleview/image/upload/v1671206402/clients/virginia/CN15063002V_093_1dae6db0-4447-4c74-b34b-c055a48918fd.jpg',
    priceRange: { startRange: 160 },
    creatorId: '1',
    creator: {
      id: '1',
      name: 'Anh Quoc',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
      email: 'anhquoc18092003@gmail.com'
    },
    subImages: [
      'https://res.cloudinary.com/simpleview/image/upload/v1671206402/clients/virginia/CN15063002V_093_1dae6db0-4447-4c74-b34b-c055a48918fd.jpg',
      'https://res.cloudinary.com/simpleview/image/upload/v1671206402/clients/virginia/CN15063002V_093_1dae6db0-4447-4c74-b34b-c055a48918fd.jpg',
      'https://res.cloudinary.com/simpleview/image/upload/v1671206402/clients/virginia/CN15063002V_093_1dae6db0-4447-4c74-b34b-c055a48918fd.jpg',
      'https://res.cloudinary.com/simpleview/image/upload/v1671206402/clients/virginia/CN15063002V_093_1dae6db0-4447-4c74-b34b-c055a48918fd.jpg'
    ],
    description:
      'This is description for Event, This is description for Event, This is description for Event, This is description for Event,This is description for Event, This is description for Event',
    location: 'UIT Ho Chi Minh city',
    locationPath:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231240416691!2d106.80047917509012!3d10.870008889284525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAtIMSQSFFHIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1715500492989!5m2!1svi!2s',
    startTime: new Date(),
    endTime: new Date(),
    eventCycleType: EEventStyle.RECURRING,
    eventPaymentType: EEventPaymentTicket.Paid,
    isPrivate: false,
    isTrash: true,
    ticketTypes: [
      {
        id: 1,
        name: 'Medium',
        quantity: 100,
        numberOfSoldTickets: 20,
        price: 100
      },
      {
        id: 2,
        name: 'Vip',
        quantity: 50,
        numberOfSoldTickets: 10,
        price: 150
      }
    ],
    numberOfFavourites: 50,
    numberOfShares: 100,
    numberOfSoldTickets: 20,
    averageRating: 4.5,
    status: EEventStatus.Upcoming,
    reasons: ['This is reasons 1', 'This is reasons 2, This is reasons 3'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default events
