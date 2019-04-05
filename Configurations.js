module.exports = {
  input1 : {
    adults: [4,400],
    kid02: [1,100],
    kid35: [2,200],
    kid611: [3,300],
  },
  output1 : { 
    total: 3000,
    downpayment: 1500,
    balance: 1500,
    adults: 1600,
    kid02: 100,
    kid35: 400,
    kid611: 900 
  },
  input2 : {
    adults: [4,400],
    kid02: [1,100],
    kid35: [2,200],
    kid611: [3,0],    
  },
  output2 : { 
    total: 2900,
    downpayment: 1450,
    balance: 1450,
    adults: 1600,
    kid02: 100,
    kid35: 400,
    kid611: 800 
  },  
  input3 : {
    basePrice: {
      adults: [4,400],
      kid02: [1,100],
      kid35: [2,200],
      kid611: [3,0],
    },
    hotelNights: 2,
    hotelPricePerNight: 500.00  
  },
  output3 : { 
    total: 4400,
    downpayment: 2200,
    balance: 2200,
    adults: 2600,
    kid02: 100,
    kid35: 400,
    kid611: 1300 
  },  
}