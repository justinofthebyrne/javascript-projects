// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("testing organization", function() {
    expect(launchcode.organization).toBe("nonprofit")
})
});