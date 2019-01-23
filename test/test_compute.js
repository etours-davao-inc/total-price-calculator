const assert = require('chai').assert
const expect = require('chai').expect
const calculateTotal = require('../calculateTotal.js').calculateTotal
const requiredReturnKeys = require('../Configurations.js').requiredReturnKeys

var returnValue = calculateTotal()

describe('Compute', ()=> {
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
})

