import {assert, expect} from 'chai';
import {calculateTotal} from '../Calculator.js'
import {requiredReturnKeys, exampleInputValues} from '../Configurations.js'

describe('Compute price with hotel', () => {
  let inputParameters = {
    "basePrice":{
      "adult": [4,400],
      "kid02": [1,100],
      "kid35": [2,200],
      "kid611": [3,300],
    },
    "hotelNights": 2,
    "hotelPricePerNight": 1000.00
  }
})

describe('Compute Total using base price only', ()=> {
  let returnValue = calculateTotal(exampleInputValues)
  it("Module Imported", ()=> {
    assert.exists(calculateTotal)
  })
  describe("Check return value", ()=> {
    it("Returned a value", ()=> {
      expect(returnValue).to.be.ok
    })
    it("Returned required fields", () => {
      expect(returnValue).to.have.keys(requiredReturnKeys)
    })
  })
  describe("Computations are correct", () => {
    let total = (4*400) + (3*300) + (2*200) + (1*100)
    let downpayment = total/2
    let balance = total - downpayment
    it("Adult total is correct", () => {
      expect(returnValue.adult).to.be.equal(4*400)
    })
    it("k02 total is correct", () => {
      expect(returnValue.kid02).to.be.equal(1*100)
    })
    it("k35 total is correct", () => {
      expect(returnValue.kid35).to.be.equal(2*200)
    })
    it("k61 total is correct", () => {
      expect(returnValue.kid611).to.be.equal(3*300)
    })
    it("Total is correct", () => {
      expect(returnValue.total).to.be.equal(total)
    })
    it("Downpayment is correct", () => {
      expect(returnValue.downpayment).to.be.equal(downpayment)
    })
    it("Balance is correct", () => {
      expect(returnValue.balance).to.be.equal(balance)
    })           
  })
})



