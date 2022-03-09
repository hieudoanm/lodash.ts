import { now } from '.';

describe('now', () => {
  it('return current timestamp', () => {
    const nowTS = now();
    console.log(nowTS);
    expect(typeof nowTS).toEqual('number');
  });
});
