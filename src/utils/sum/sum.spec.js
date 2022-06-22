/* eslint-disable no-undef */
import sum from './sum';

describe('utils/sum', () => {
  it('Should return total', () => {
    const actual = sum(1, 2);
    expect(actual).toEqual(3);
  });
});
