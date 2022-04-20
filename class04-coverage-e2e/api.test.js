const { describe, it } = require('mocha');
const request = require('supertest')
const app = require('./api')
const assert = require('assert')

describe('API Suite test', () => {
    describe('/contact', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await request(app)
                .get('/contact')
                .expect(200)
            assert.deepStrictEqual(response.text, 'contact us page')
        })
    })

    describe('/', () => {
        it('should request an inexist route /hi and redirect to /hello', async () => {
            const response = await request(app)
                .get('/hi')
                .expect(200)

            assert.deepStrictEqual(response.text, 'Hello World !')
        })
    })

    describe('/login', () => {
        it('should login successfully on the login route and return HTTP Status 200', async () => {
            const response = await request(app)
                .post('/login')
                .send({ username: 'mhayk', password: '123' })
                .expect(200)

            assert.deepStrictEqual(response.text, 'Logging has succeeded!')
        })

        it('should unauthorize a request hwen it is being used a wrong credentials and return HTTP Status 401', async () => {
            const response = await request(app)
                .post('/login')
                .send({ username: 'Xuxa', password: '1234' })
                .expect(401)

            console.log('response', response.unauthorized)

            assert.ok(response.unauthorized)

            assert.deepStrictEqual(response.text, 'Logging has failed!')
        })
    })
})