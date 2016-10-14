/* eslint-disable no-magic-numbers */
import test from 'ava';
import pigeonholeSort from './index';

test('sorts arrays', t => {
  const unsortedArray = [721, 4, 117, 13, 10, 880, 4, 117, 88];
  const sortedArray = [4, 4, 10, 13, 88, 117, 117, 721, 880];
  t.deepEqual(pigeonholeSort(unsortedArray), sortedArray);
});

test('throws an error when input is not an array', t => {
  t.throws(() => pigeonholeSort(null));
  t.throws(() => pigeonholeSort({}));
  t.throws(() => pigeonholeSort(1, 2, 3));
  t.throws(() => pigeonholeSort());
});

test('throws an error when array contains NaN', t => {
  t.throws(() => pigeonholeSort(['cow', 'pig', 'duck', 'horse']));
});

test('does not throw an error with valid input', t => {
  t.notThrows(() => pigeonholeSort([5, 4, 3, 2, 1]));
});
