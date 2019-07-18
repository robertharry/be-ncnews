const { expect } = require('chai');
const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  it('returns a new array', () => {
    expect(formatDates([])).to.be.a('Array')
  });
  it('returns a formatted date when given as part of an array', () => {
    const input = [{ created_at: 1468087638932 }]
    const actual = formatDates(input)
    const expected = [{ created_at: new Date(input[0].created_at) }];
    expect(actual).to.eql(expected)
  });
});

describe('makeRefObj', () => {
  it('returns an object', () => {
    expect(makeRefObj([])).to.be.a('object')
  });
  it('returns a ref object when given a single object input', () => {
    const input = [{ article_id: 1, title: 'A' }]
    const actual = makeRefObj(input);
    const expected = { A: 1 }
    expect(actual).to.eql(expected)
  });
  it('returns a ref object when given a multiple object inputs', () => {
    const input = [{ article_id: 1, title: 'A' }, { article_id: 2, title: 'B' }, { article_id: 3, title: 'C' }]
    const actual = makeRefObj(input);
    const expected = { A: 1, B: 2, C: 3 }
    expect(actual).to.eql(expected)
  })
});

describe('formatComments', () => {
  it('returns an array', () => {
    expect(formatComments([])).to.be.a('array')
  });
  xit('renames "belongs_to" key to "article_id" & "created_by" key to "author" & value of article_id changed to title value', () => {
    const comments = [{ created_by: 'butter_bridge', belongs_to: 'Living in the shadow of a great man' }];
    const articleRef = makeRefObj([{
      article_id: 1,
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100,
    }])
    const actual = formatComments(comments, articleRef);
    expect(actual).to.contain.keys('article_id', 'author')
  });
  it('renames "belongs_to" key to "article_id" & "created_by" key to "author" & value of article_id changed to title value & converts date stamp', () => {
    const comments = [{
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'butter_bridge',
      votes: 14,
      created_at: 1479818163389,
    },
    {
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "Living in the shadow of a great man",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: 1511354163389,
    }];
    const articleRef = makeRefObj([{
      article_id: 1,
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100,
    }])
    const actual = formatComments(comments, articleRef);
    const expected = [
      {
        body: 'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
        votes: 14,
        created_at: new Date(comments[0].created_at),
        author: 'butter_bridge',
        article_id: 1
      },
      {
        body: "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        votes: 16,
        created_at: new Date(comments[1].created_at),
        author: 'butter_bridge',
        article_id: 1
      }
    ];
    expect(actual).to.eql(expected)
  });
  it('TEST data not mutatedrenames "belongs_to" key to "article_id" & "created_by" key to "author" & value of article_id changed to title value & converts date stamp', () => {
    const comments = [{
      body:
        'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
      belongs_to: 'Living in the shadow of a great man',
      created_by: 'butter_bridge',
      votes: 14,
      created_at: 1479818163389,
    },
    {
      body:
        "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
      belongs_to: "Living in the shadow of a great man",
      created_by: 'butter_bridge',
      votes: 16,
      created_at: 1511354163389,
    }];
    const articleRef = makeRefObj([{
      article_id: 2,
      title: 'some other thing',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100,
    },{
      article_id: 1,
      title: 'Living in the shadow of a great man',
      topic: 'mitch',
      author: 'butter_bridge',
      body: 'I find this existence challenging',
      created_at: 1542284514171,
      votes: 100,
    }])
    const actual = formatComments(comments, articleRef);
    const expected = [
      {
        body: 'The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.',
        votes: 14,
        created_at: new Date(comments[0].created_at),
        author: 'butter_bridge',
        article_id: 1
      },
      {
        body: "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        votes: 16,
        created_at: new Date(comments[1].created_at),
        author: 'butter_bridge',
        article_id: 1
      }
    ];
    expect(actual).to.eql(expected)
    expect(actual).to.not.eql(comments)
  });
});
