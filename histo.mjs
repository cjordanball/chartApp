import { countPrep, findObjMax, createLine } from './helpers.mjs';

let createHistogram = (input) => {
    // entries is an ordered listing of the numbers in the array
    let entries = Array(...new Set(input));

    // countObject is an object keeping track of how many of each number in the array
    let countObject = countPrep(input)

    // max is the maximum number of times a number occurs in the array
    let max = findObjMax(countObject)

    // create a holder for the histogram lines
    let lineArr = [];

    for (let i = max; i >= 1; i--) {
        lineArr.push(createLine(i, entries, countObject))
    }

    let histogram = lineArr.join('') + entries.join('');

    console.log(histogram);
}

createHistogram([3, 4, 2, 1, 6, 6, 4, 4])
createHistogram([8, 8, 8, 8, 6, 1, 1, 8, 1, 4])