const { deepStrictEqual } = require('assert');
let counter = 0
let counter2 = counter
counter2++

const item = { counter: 0 }
const item2 = item

// primitive type is copied by value

deepStrictEqual(counter, 0)
deepStrictEqual(counter2, 1)

// object type is copied by reference
// reference type is copied by memory address
item2.counter++
deepStrictEqual(item, { counter: 1 })
item.counter++
deepStrictEqual(item, { counter: 2 })