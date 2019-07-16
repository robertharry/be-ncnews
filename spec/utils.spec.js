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

describe.only('formatComments', () => {
  it('returns an array', () => {
    expect(formatComments([])).to.be.a('array')
  });
  it('renames "created_by" key to "author"', () => {
    const comments = [{ created_by: 'a person' }];
    const actual = formatComments(comments);
    const expected = [{ author: 'a person' }];
    expect(actual).to.eql(expected)
  });
});
