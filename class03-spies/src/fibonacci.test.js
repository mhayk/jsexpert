const Fibonacci = require('./fibonacci');
const sinon = require('sinon');
const assert = require('assert');

// Fibonacci sequence, in which each number is the sum of the two preceding ones.
// given 3
// 0, 1, 1
// given 5
// 0, 1, 1, 2, 3
// given 10
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
(async () => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);
        // generators return iterators, (.next)
        // it has three different ways to read the data
        // invoking the functions .next, for await and rest/spread

        for await (const i of fibonacci.execute(3)) { }

        // the algorithm is going to start from zero.
        const expectedCallCount = 4
        assert.deepStrictEqual(spy.callCount, expectedCallCount);
    }
})()