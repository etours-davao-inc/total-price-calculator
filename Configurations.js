module.exports = {
  input1 : {
    adults: [4,400],
    kid02: [1,100],
    kid35: [2,200],
    kid611: [3,300],
  },
  output1 : { 
    item: { 
      adults: 400,
      kid02: 100,
      kid35: 200,
      kid611: 300
    },
    total: {
      adults: 1600,
      kid02: 100,
      kid35: 400,
      kid611: 900,
      total: 3000,
      downpayment: 1500,
      balance: 1500,      
    }

  },
  input2 : {
    adults: [4,400],
    kid02: [1,100],
    kid35: [2,200],
    kid611: [3,0],    
  },
  output2 : {
    item: { 
      adults: 400,
      kid02: 100,
      kid35: 200,
      kid611: 200
    },    
    total: {
      adults: 1600,
      kid02: 100,
      kid35: 400,
      kid611: 600,
      total: 2700,
      downpayment: 1350,
      balance: 1350      
    }
  },  
  input3 : {
    adults: [4,400],
    kid02: [1,100],
    kid35: [2,200],
    kid611: [3,0],
    tourDates: {
      hotelNights: 2,
    },
    hotel : {
      price: 500.00  
    }
  },
  output3 : {
    item: { 
      adults: 1400,
      kid02: 100,
      kid35: 200,
      kid611: 700
    },      
    total: {
      adults: 5600,
      kid02: 100,
      kid35: 400,
      kid611: 2100,
      total: 8200,
      downpayment: 4100,
      balance: 4100
    }
  },  
}