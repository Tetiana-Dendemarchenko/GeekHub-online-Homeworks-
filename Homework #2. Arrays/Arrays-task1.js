//looking for a maximum Array value
const arrayMaxNumber = arrayForModification => {
    let maxNumber;
    for (let i = 0; i < arrayForModification.length; i++) {
        if (typeof arrayForModification[i] === 'number' && isNaN(arrayForModification[i]) !== true) {
            if (typeof(maxNumber) === 'undefined') {
                maxNumber = arrayForModification[i];
            }

            if (arrayForModification[i] > maxNumber) {
                maxNumber = arrayForModification[i];
            }
        }
    }
    return maxNumber;
}
console.log(arrayMaxNumber([3, 0,-5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1]));
                        /* [-1,-8,-2]
                           [1,7,3]
                           [1,undefined,3,5,-3]
                           [1,NaN,3,5,-3] */

//looking for a minimum Array value
const arrayMinNumber = arrayForModification => {
    let minNumber;
    for (let i = 0; i < arrayForModification.length; i++) {
        if (typeof arrayForModification[i] === 'number' && isNaN(arrayForModification[i]) !== true) {
            if (typeof(minNumber) === 'undefined') {
                minNumber = arrayForModification[i];
            }

            if (arrayForModification[i] < minNumber) {
                minNumber = arrayForModification[i];
            }
        }
    }
    return minNumber;
}
console.log(arrayMinNumber([3, 0,-5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1]));
                        /* [-1,-8,-2]
                           [1,7,3]
                           [1,undefined,3,5,-3]
                           [1,NaN,3,5,-3] */

//sum of Array values
const arraySum = arrayForModification => {
    let valueSum = 0;
    for (let i = 0; i < arrayForModification.length; i++) {
        if (typeof arrayForModification[i] === 'number' && isNaN(arrayForModification[i]) !== true) {
            valueSum += arrayForModification[i];
        }
    }
    return valueSum;
}
console.log(arraySum([3, 0,-5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1]));
                        /* [-1,-8,-2]
                           [1,7,3]
                           [1,undefined,3,5,-3]
                           [1,NaN,3,5,-3] */
