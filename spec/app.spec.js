process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const request = require('supertest')
const app = require('../app')
const connection = require('../connection')

describe('/API', () => {
    beforeEach(() => connection.seed.run());
    after(() => connection.destroy());
    describe('/TOPICS', () => {
        it('/TOPICS will return an array of topics with status 200, and have keys description and slug', () => {
            return request(app)
                .get('/api/topics')
                .expect(200)
                .then(res => {
                    expect(res.body.topics).to.be.a('array')
                    expect(res.body.topics[0]).to.have.keys('description', 'slug')
                })
        })
    })
    describe('/USERS', () => {
        it('GET /USERS/:username responds with status 200 and username, name and avatar url', () => {
            return request(app)
                .get('/api/users/butter_bridge')
                .expect(200)
                .then(res => {
                    expect(res.body.user[0]).to.have.keys('username', 'avatar_url', 'name')
                    expect(res.body.user[0].name).to.equal('jonny')
                })
        })
        xit('/USERS/invalid username responds with 404, and not found', () => {
            return request(app)
                .get('/api/users/invalid_user_id')
                .expect(404)
        })
    })
    describe('/ARTICLES', () => {
        it('GET /ARTICLES/:article_id, responds with 200, article details, and a comment count', () => {
            return request(app)
                .get('/api/articles/1')
                .expect(200)
                .then(res => {
                    expect(res.body.article[0].author).to.equal('butter_bridge')
                    expect(res.body.article[0]).to.contain.keys('title', 'author', 'votes', 'comment_count')
                })
        })
        it('GET/ARTICLES/:article_id updates article vote count and returns article', () => {
            return request(app)
                .patch('/api/articles/1')
                .expect(200)
                .then(res => {
                    expect(res.body.article[0].votes).to.equal(5)
                })
        })
    })
})