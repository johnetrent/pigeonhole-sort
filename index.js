/* eslint-disable no-magic-numbers */

// https://en.wikipedia.org/wiki/Pigeonhole_sort
// array of numbers
// range from 0 - 999

export default function pigeonholeSort(unsortedArray) {

  if (!Array.isArray(unsortedArray)) {
    throw new Error(`pigeonholeSort() expects an array! Found ${typeof unsortedArray}.`);
  }

  const pigeonhole = [];

  unsortedArray.forEach(number => {
    if (isNaN(number)) {
      throw new Error(`pigeonholeSort() expects an array of numbers! Found ${typeof number}.`);
    }
    // Add each number to its respective pigeonhole
    if (pigeonhole[number]) pigeonhole[number].push(number);
    else pigeonhole[number] = [number];
  });

  // Use reduce to flatten an array of arrays!
  return pigeonhole.reduce((a, b) => a.concat(b), []);

}
