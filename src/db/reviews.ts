const reviews = [
  {
    id: '1',
    userId: '1',
    fullName: 'Tran Phuoc Anh Quoc',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1727937376/portfolio/cvamkt4fy2o8ozy5ewgm.jpg',
    email: 'anhquoc18092003@gail.com',
    eventId: '1',
    eventName: 'Music With UIT',
    eventCoverImage:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
    content:
      'An unforgettable experience! The event was well-organized, with every detail thought out to ensure guests felt comfortable and entertained. The speakers were knowledgeable and engaging—highly recommend attending next year!',
    rate: 3,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    userId: '2',
    fullName: 'Mai Dinh Khoi',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    email: 'dinhkhoi18092003@gail.com',
    eventId: '2',
    eventName: 'Music With UEH',
    eventCoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
    content:
      'This event was beyond my expectations. The atmosphere was vibrant, and the performances were top-notch. The organizers did a great job managing the crowd and keeping everything on schedule. I’ll definitely be back!',
    rate: 4,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    userId: '1',
    fullName: 'Tran Phuoc Anh Quoc',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1727937376/portfolio/cvamkt4fy2o8ozy5ewgm.jpg',
    email: 'anhquoc18092003@gail.com',
    eventId: '3',
    eventName: 'Music In Live',
    eventCoverImage: 'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
    content:
      'I enjoyed every moment of the event. It was a fantastic opportunity to connect with people who share my interests. The workshops were particularly informative and practical. A perfect mix of fun and learning!',
    rate: 5,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    userId: '2',
    fullName: 'Mai Dinh Khoi',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    email: 'dinhkhoi18092003@gail.com',
    eventId: '4',
    eventName: 'Music With UIT',
    eventCoverImage:
      'https://img.freepik.com/free-vector/sport-text-banner-poster-design_1308-132612.jpg?semt=ais_hybrid',
    content:
      'While I enjoyed parts of the event, there were some logistical issues that made it difficult to fully appreciate the experience. The location was hard to reach, and there could have been more seating options. Hopefully, these are improved next time',
    rate: 3,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    userId: '1',
    fullName: 'Tran Phuoc Anh Quoc',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1727937376/portfolio/cvamkt4fy2o8ozy5ewgm.jpg',
    email: 'anhquoc18092003@gail.com',
    eventId: '5',
    eventName: 'Music With UIT',
    eventCoverImage:
      'https://www.electricireland.com/images/folder/homepage-spotlights/benefits-0.jpg?sfvrsn=bc86ba0d_2',
    content:
      'Fantastic event! The lineup of artists was amazing, and the sound system was just perfect. Food and drinks were readily available, and the staff was friendly and helpful. Already looking forward to the next one!',
    rate: 4,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    userId: '1',
    fullName: 'Mai Dinh Khoi',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    email: 'dinhkhoi18092003@gail.com',
    eventId: '6',
    eventName: 'Music With UIT',
    eventCoverImage: 'https://www.uit.edu.vn/sites/vi/files/uploads/images/thumbs/202011/khpm2.jpg',
    content:
      'I was impressed with how smooth everything went! From registration to the closing remarks, the event ran without a hitch. I particularly loved the interactive sessions—they really added value to the experience.',
    rate: 5,
    isPositive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    userId: '1',
    fullName: 'Tran Phuoc Anh Quoc',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1727937376/portfolio/cvamkt4fy2o8ozy5ewgm.jpg',
    email: 'anhquoc18092003@gail.com',
    eventId: '7',
    eventName: 'Music With UIT',
    eventCoverImage:
      'https://thesentry.com.vn/wp-content/uploads/2024/01/workshop-la-gi-7-buoc-to-chuc-workshop-hieu-qua-1.jpg',
    content:
      'This event exceeded my expectations. It offered a great balance between entertainment and education, with sessions that were both inspiring and useful. The organizers clearly put a lot of thought into the program.',
    rate: 3,
    isPositive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    userId: '1',
    fullName: 'Mai Dinh Khoi',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    email: 'dinhkhoi18092003@gail.com',
    eventId: '8',
    eventName: 'Music With UIT',
    eventCoverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlctaT_Xg2OpWZRHXfP5k5KZrxVch4BCEG8A&s',
    content:
      'I appreciated the variety of activities available at the event, but some of the sessions felt a bit rushed. There was so much to take in, and I wish I had more time to enjoy everything. Overall, though, a great experience',
    rate: 4,
    isPositive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '9',
    userId: '1',
    fullName: 'Tran Phuoc Anh Quoc',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1727937376/portfolio/cvamkt4fy2o8ozy5ewgm.jpg',
    email: 'anhquoc18092003@gail.com',
    eventId: '9',
    eventName: 'Music With UIT',
    eventCoverImage:
      'https://vietnamteachingjobs.com/wp-content/uploads/2023/03/loi-ich-cua-work-shop-la-gi-1-750x375.jpg',
    content:
      'Incredible event! The venue was beautiful, and every detail was carefully curated to create a memorable experience. Networking opportunities were fantastic, and I met so many interesting people. Highly recommended!',
    rate: 5,
    isPositive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '10',
    userId: '2',
    fullName: 'Mai Dinh Khoi',
    userAvatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    email: 'dinhkhoi18092003@gail.com',
    eventId: '10',
    eventName: 'Food With UIT',
    eventCoverImage:
      'https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/66226d32f51bec36b0e2b8c4_4th%20of%20July%20barbecue%20scene%20group%20of%20friends%20or%20family%20enjoying%20the%20food%20and%20company.jpeg',
    content:
      'The event was good, but it could have been better organized. Some sessions started late, and the layout of the venue made it hard to navigate. That said, the quality of content was high, and I still had a good time.',
    rate: 4,
    isPositive: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default reviews
