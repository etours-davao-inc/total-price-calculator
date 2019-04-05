import {assert, expect} from 'chai';
import {Calculate} from '../index.js'
import { input1, input2, input3 } from '../Configurations.js'
import { output1, output2, output3 } from '../Configurations.js'

describe("Check correctness of return value", () => {
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



