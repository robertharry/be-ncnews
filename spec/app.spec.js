process.env.NODE_ENV - 'test';
const { expect } = require('chai');
const request = require('supertest')
const app = require('../app')
const connection = require('../connection')

describe('/API', () => {
    beforeEach(() => connection.seed.run());
    after(() => connection.destroy());
    describe('/TOPICS', () => {
        it('/TOPICS will return an array of topics with status 200', () => {
            return request(app)
                .get('/api/topics')
                .expect(200)
                .then(res => {
                    expect(res.body.topics).to.be.a('array')
                    expect(res.body.topics[0]).to.have.keys('description', 'slug')
                })
        })
    })
})