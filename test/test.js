import { expect } from 'chai';
import { Calculate } from '../index.js'
import { input1, input2, input3 } from '../Configurations.js'
import { output1, output2, output3 } from '../Configurations.js'

describe("Check correctness of return value", () => {
  it("Returns correct value for a multiday package(from website) II", () => {
    let input = {adults:[5, 9952], kid02:[4,250], kid35: [2,2050], kid611: [1,4976], tourDates: {hotelNights: 0}, hotel: {price: 0}}
    let output = { 
      item: { 
        adults: 9952,
        kid02: 250,
        kid35: 2050,
        kid611: 4976
      },
      total: {
        adults: 49760,
        kid02: 1000,
        kid35: 4100,
        kid611: 4976,
        total: 59836,
        downpayment: 29918,
        balance: 29918,      
      }
    }
    expect(Calculate(input)).to.eql(output)  
  });  
  it("Returns correct value for a multiday package(from website)", () => {
    let input = {adults:[5, 9952], kid02:[4,250], kid35: [2,2050], kid611: [1,4976], tourDates: {hotelNights: 2}, hotel: {price: 575}}
    let output = { 
      item: { 
        adults: 11102,
        kid02: 250,
        kid35: 2050,
        kid611: 5551
      },
      total: {
        adults: 55510,
        kid02: 1000,
        kid35: 4100,
        kid611: 5551,
        total: 66161,
        downpayment: 33080.50,
        balance: 33080.50,      
      }
    }
    expect(Calculate(input)).to.eql(output)  
  });
  it("Returns correct value for a DT package", () => {
    let input = {adults:[2, 4323], kid02:[1,0], kid35: [1,600], kid611: [1,0]}
    let output = { 
      item: { 
        adults: 4323,
        kid02: 0,
        kid35: 600,
        kid611: 2161.5
      },
      total: {
        adults: 8646,
        kid02: 0,
        kid35: 600,
        kid611: 2161.5,
        total: 11407.5,
        downpayment: 5703.75,
        balance: 5703.75,      
      }
  
    }
    expect(Calculate(input)).to.eql(output)
  });
  it("Input 1 returns expected output", () => {
    let returnValue = Calculate(input1)
    expect(returnValue).to.eql(output1)
  });
  it("Input 2 returns expected output", () => {
    let returnValue = Calculate(input2)
    expect(returnValue).to.eql(output2)
  });
  it("Input 3 returns expected output", () => {
    let returnValue = Calculate(input3)
    expect(returnValue).to.eql(output3)
  })
})



