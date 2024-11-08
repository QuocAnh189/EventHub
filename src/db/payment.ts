const payments = [
  {
    event: {
      coverImage:
        'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747449.jpg&fm=jpg',
      name: 'Music With UIT'
    },
    customerName: 'Anh Quoc',
    customerEmail: 'anhquoc18092003@gmail.com',
    customerPhone: '0702465814',
    ticketQuantity: 10,
    totalPrice: 500,
    discount: 10,
    status: 'active',
    paymentMethod: {
      method: {
        methodLogo: '',
        methodName: 'Pay Cashier',
        paymentAccountNumber: 'Pay Cashier'
      }
    },
    createdAt: new Date().toISOString()
  },
  {
    event: {
      coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52LuXfuyFjceKAdGai9o6PTeoQr5yiQxUtA&s',
      name: 'Music With UEH'
    },
    customerName: 'Dinh Khoi',
    customerEmail: 'dinhkhoi18092003@gmail.com',
    customerPhone: '0702465814',
    ticketQuantity: 10,
    totalPrice: 400,
    discount: 10,
    status: 'active',
    paymentMethod: {
      method: {
        methodLogo: '',
        methodName: 'Pay Cashier',
        paymentAccountNumber: 'Pay Cashier'
      }
    },
    createdAt: new Date().toISOString()
  },
  {
    event: {
      coverImage: 'https://prankl-consulting.com/wp-content/uploads/2023/06/AdobeStock_119471366-1-1088x726.jpeg',
      name: 'Music in Live'
    },
    customerName: 'Vuong Duy',
    customerEmail: 'vuongduy18092003@gmail.com',
    customerPhone: '0702465814',
    ticketQuantity: 10,
    totalPrice: 300,
    discount: 10,
    status: 'active',
    paymentMethod: {
      method: {
        methodLogo: '',
        methodName: 'Pay Cashier',
        paymentAccountNumber: 'Pay Cashier'
      }
    },
    createdAt: new Date().toISOString()
  }
]

export default payments
