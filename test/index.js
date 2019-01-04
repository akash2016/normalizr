import { expect } from 'chai';
import normalizer from '../src';

const input = { first: { second: [{ id: 1, value: 1 }], third: [{ value: 3 }] } };

const output = { first: { second: { 1: { value: 1 } }, third: [{ value: 3 }] } };

describe('normalizer test.', () => {
  it('should test type of normalizer function', () => {
    expect(normalizer(input)).to.be.a('object');
  });
});
