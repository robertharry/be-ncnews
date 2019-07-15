const { expect } = require('chai');
const {
  formatDates,
  makeRefObj,
  formatComments,
} = require('../db/utils/utils');

describe('formatDates', () => {
  xit('returns a new array', () => {
    expect(formatDates([])).to.be.a('Array')
  });
  xit('changes a single timestamp to a date format', () => {
    const input = [Date.now()]
    const actual = formatDates(input);
    expect(actual).to.eql([Date(Date.now())])
  });
  it('it returns a formatted date when given as part of an array', () => {
    const input = [{ created_at: 1468087638932 }]
    const actual = formatDates(input)
    const expected = [{ created_at: 'Mon Jul 15 2019 12:24:25 GMT+0100 (British Summer Time)' }];
    expect(actual).to.eql(expected)
  })
});

describe('makeRefObj', () => { });

describe('formatComments', () => { });
