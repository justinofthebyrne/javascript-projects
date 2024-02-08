const test = require('../RPS.js');

describe("whoWon", function(){

    test("when players both choose the same option", function(){
        let output = test.whoWon('rock', 'paper');
        expect(output).tobe("Player 2 wins!");
    });
});