const assert = require('chai').assert
const expect = require('chai').expect
const App = require('../compute.js')

var returnValue = App.compute()
var requiredReturnKeys = [
  'adult_total',
  'k02_total',
  'k35_total',
  'k61_total',
  'downpayment',
  'total',
  'balance'
]

describe('Compute', ()=> {
  it("Module Imported", ()=> {
    assert.exists(App)
  })
  describe("Check return value", ()=> {
    it("Returned a value", ()=> {
      expect(returnValue).to.be.ok
    })
    it("Returned required fields", ()=> {
        expect(returnValue).to.have.keys(requiredReturnKeys)
    })
  })
})