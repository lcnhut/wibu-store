import { setColorTag } from './setTagColor';

/* eslint-disable no-undef */
describe('utils/setTagColor', () => {
  it('should be return color mapping with index', () => {
    expect(setColorTag(0)).toEqual('volcano');
    expect(setColorTag(2)).toEqual('cyan');
  });
});
