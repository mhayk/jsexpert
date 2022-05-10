'use strict';

const { watch, promises: { readFile } } = require('fs')

class File {
    watch(event, filename) {
        console.log('this', this)
        console.log('arguments', Array.prototype.slice.call(arguments))
        this.showContent(filename)
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString())
    }
}

/*
watch(__filename, async (event, filename) => {
    console.log('index.js!', event, filename)
    console.log((await readFile(filename)).toString())
})
*/

const file = new File()
// this way, 'this' from the class is ignored
// inherited this from watch()
// watch(__filename, file.watch)

// an alternative not not inherited this from watch()
// but it is really ugly
// watch(__filename, (event, filename) => file.watch(event, filename))

// we can take explicit what is the context that the function should be called with
// bind returns a function that will be called with the context
// watch(__filename, file.watch.bind(file))

file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename)
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename])
