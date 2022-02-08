// countPrep() takes the original array input and returns an object, the keys of which
// are the various values contained in the array, and the value of each key is the
// number of times it appears in the arroay.
export let countPrep = (arrayInput) => {
    let countObj = {};
    arrayInput.forEach((val) => {
        if (countObj[String(val)]) {
            countObj[String(val)] += 1;
        } else {
            countObj[String(val)] = 1;
        }
    });
    return countObj;
};

// findObjMax() takes the object returned by countPrep() as a parameter and returns the
// largest value contained in the object (i.e., the largest count of any number)
export let findObjMax = (someObj) => {
    let vals = Object.values(someObj)
    // let keyArr = Object.keys(someObj);
    // let valArr = keyArr.map((key) => {
    //     return someObj[key]
    // });

    return Math.max(...vals);
}

// createLine() takes three parameters: i) target, the value that must be
// equalled or exceeded to get a star, ii) numList, the array of keys, and 
// countObj, the object created by countPrep().  It returns a string consisting
// of stars and spaces, with a new-line character at the end.
export let createLine = (target, numList, countObj) => {
    let lineArr = [];
    numList.forEach((val) => {
        if (countObj[val] >= target) {
            lineArr.push("*");
        } else {
            lineArr.push(" ");
        }
    })
    return lineArr.join('') + "\n"
}