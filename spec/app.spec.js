process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');
const connection = require('../connection');
const chai = require('chai');
expect = chai.expect;
chai.use(require('chai-sorted'));

describe('/API', () => {
    beforeEach(() => connection.seed.run());
    after(() => connection.destroy());
    it('/invalid_route returns Route not found', () => {
        return request(app)
            .get('/invalidroute')
            .expect(404)
            .then(res => {
                expect(res.body.msg).to.equal('Route not found')
            })
    })
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
    describe.only('/USERS', () => {
        it('GET /USERS/:username responds with status 200 and username, name and avatar url', () => {
            return request(app)
                .get('/api/users/butter_bridge')
                .expect(200)
                .then(res => {
                    expect(res.body.user[0]).to.have.keys('username', 'avatar_url', 'name')
                    expect(res.body.user[0].name).to.equal('jonny')
                })
        })
        it('/USERS/invalid username responds with 404, and not found', () => {
            return request(app)
                .get('/api/users/invalid_user_id')
                .expect(404)
                .then(res => {
                    expect(res.body.msg).to.equal('user not found')
                })
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
        it('GET/ARTICLES/:article_id/comments returns array of comments', () => {
            return request(app)
                .get('/api/articles/1/comments')
                .expect(200)
                .then(res => {
                    expect(res.body.article[0]).to.contain.keys('author', 'comment_id', 'votes', 'created_at', 'body')
                })
        })
        it('GET/ARTICLES/:article_id/comments, accepts sort_by query by any given column', () => {
            return request(app)
                .get('/api/articles/1/comments?sort_by=comment_id')
                .expect(200)
                .then(res => {
                    expect(res.body.article).to.be.sortedBy('comment_id')
                })
        })
        it('PATCH/ARTICLES/:article_id, takes an object and in(de)crements the votes by a given value', () => {
            return request(app)
                .patch('/api/articles/1')
                .send({ inc_votes: -10 })
                .expect(200)
                .then(res => {
                    expect(res.body.article[0].votes).to.equal(90)
                })
        })
        it('POST/ARTICLES/:article_id/comments, posts a new comment against given article ID', () => {
            return request(app)
                .post('/api/articles/1/comments')
                .send({ username: "butter_bridge", body: "testing my body and my patience" })
                .expect(201)
                .then(res => {
                    expect(res.body.comment[0].author).to.equal("butter_bridge")
                    expect(res.body.comment[0].body).to.equal("testing my body and my patience")
                    expect(res.body.comment[0].votes).to.equal(0)
                })
        })
        it('GET/ARTICLES, returns an array of articles with properties', () => {
            return request(app)
                .get('/api/articles')
                .expect(200)
                .then(res => {
                    expect(res.body.articles[0]).to.contain.keys('author', 'title', 'comment_count')
                })
        })
        it('GET/ARTICLES, accepts queries of sort_by, defaults to date', () => {
            return request(app)
                .get('/api/articles?sort_by=author')
                .expect(200)
                .then(res => {
                    expect(res.body.articles).to.be.sortedBy('author')
                    expect(res.body.articles[0]).to.contain.keys('title', 'author')
                })
        })
        it('GET/ARTICLES, accepts queries of author, which filters by given author', () => {
            return request(app)
                .get('/api/articles?author=rogersop')
                .expect(200)
                .then(res => {
                    expect(res.body.articles[0].author).to.equal('rogersop')
                })
        })
        it('GET/ARTICLES, accepts queries of topic, which filters by given topic', () => {
            return request(app)
                .get('/api/articles?topic=cats')
                .expect(200)
                .then(res => {
                    expect(res.body.articles[0].topic).to.equal('cats')
                })
        })
    })
    describe('/COMMENTS', () => {
        it('PATCH/COMMENTS:comment_id updates the comments votes value', () => {
            return request(app)
                .patch('/api/comments/1')
                .send({ inc_votes: 20 })
                .expect(200)
                .then(res => {
                    expect(res.body.comment[0].votes).to.equal(36)
                })
        })
        xit('DELETE/COMMENTS:comment_id deletes the given comment based on comment_id ', () => {
            return request(app)
                .delete('/api/comments/1')
                .expect(204)
            //^^^ incomplete testing and model
        })
    })
})