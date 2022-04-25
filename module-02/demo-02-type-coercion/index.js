9999999999999999 // 16
// 10000000000000000

true + 2
// 3

'21' + true
// '21true'

'21' - true
// 20

'21' - - 1
// 22

0.1 + 0.2 === 0.3
// false

3 > 2 > 1
// false

3 > 2 >= 1
// true

"B" + "a" + + "a" + "a"
// "BaNaNa"

'1' == 1
'1' === 1


// ----------
String(123)
// '123'

123 + ''
// '123'

console.assert(String(123) === '123', 'explicit conversion to string')
console.assert(123 + '' === '123', 'implicit conversion to string')

console.assert(('hello' || 123) === 'hello', "|| return the first truthy value always")
console.assert(('hello' && 123) === 123, "&& return the last truthy value always")


// ----------
const item = {
    name: 'Mhayk Whandson',
    age: 35,
    // string: if it was not a primitive type, it will invoke valueOf()
    toString() {
        console.log('hey')
        return `Name: ${this.name}, Age: ${this.age}`
    },

    // number: if it was not a primitive type, it will invoke toString()
    valueOf() {
        return { hey: 'dude' }
        // return 007
    },

    // it has the priority !!
    [Symbol.toPrimitive](coercionType) {
        // console.log('trying to convert to', coercionType)
        const types = {
            string: JSON.stringify(this),
            number: '0007',
        }

        return types[coercionType] || types.string
    }
}

// console.log('toString: ', String(item))

// // it is going to return NaN bacause toString() has returned a string
// console.log('valueOf: ', Number(item))

// after to added toPrimite
// console.log('String', String(item))
// console.log('String', Number(item))
// // invoke the default conversion
// console.log('Date', new Date(item))

console.assert(item + 0 === '{"name":"Mhayk Whandson","age":35}0')
// console.log('!!item is true?', !!item)
console.assert(!!item)

// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Mhayk Whandson","age":35}')

// console.log('implicit + explicit coercion (using ==)', item == String(item))
console.assert(item == String(item))

const item2 = { ...item, name: 'Alice', age: 7 }
// console.log('New Object', item2)
console.assert(item2.name === 'Alice' && item2.age === 7)