import { hello } from './greetings';

describe('hello()', () => {
  it('should return the correct message when called', () => {
    const name = 'testing';
    expect(hello(name)).toBe(`Hello ${name}!`);
  });

  it('should return the default message when called without parameter', () => {
    expect(hello()).toBe(`Hello world!`);
  });
});
