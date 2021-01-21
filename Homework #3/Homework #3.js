//Homework #3 - Task 1

function insteadOfFor(i) {
    console.log(i);
    if (i <= 1) {
        return i;
    } else {
        insteadOfFor(i - 1);
    }
}

insteadOfFor();


//Homework #3 - Task 3

function combine(x) {
    let sum = x;
    return function sumInFunct(y) {
        sum += y;
        sumInFunct.result = sum;
        return sumInFunct;
    }
}
console.log(combine(1)(2)(3).result);

//Homework #3 - Task 4

class MathExpress {
    constructor() {
        this.digit = 0;
    }
    calculate(x) {
        this.digit = x;
        return this;
    }
    add(x) {
        this.digit += x;
        return this;
    }
    multiply(x) {
        this.digit *= x;
        return this;
    }
    result() {
        console.log(this.digit);
        return this;
    }
}

let mathExpress = new MathExpress();

mathExpress.calculate(3).add(2).multiply(2).result();

//Homework #3 - Task 5

    //myForEach

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

function callback(element) {
    console.log(element);
}

let sampleArray = [1, 2, 3, 4, 5]; //random array sample

sampleArray.myForEach(callback);

    //myMap

Array.prototype.myMap = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
        let element = callback(this[i]);
        newArray.push(element);
    }
    return newArray;
};

let sampleArray = [1, 2, 3, 4, 5];
sampleArray = sampleArray.myMap(e => e);
console.log(sampleArray);

    //mySort

Array.prototype.mySort = function() {
    let x = this.length;
    while(x !== 0) {
        let anotherX = 0;
        for(let i = 1; i < this.length; i++) {
            if(this[i] < this[i - 1]) {
                let save = this[i];
                this[i] = this[i - 1];
                this[i - 1] = save;
                anotherX = i;
            }
        }
        x = anotherX;
    }
    return this;
}

let randomArrayToCheck = [7, 118, -33, 4, 5, -5, 123, 12];
console.log(randomArrayToCheck.mySort());

    //myFilter

Array.prototype.myFilter = function(x) {
    let filtNum = [];
    for(let i = 0; i < this.length; i++) {
        if (x(this[i], i, this)) filtNum.push(this[i]);
    }
    return filtNum;
};

let sampleArray2 = [1, 2, 3, 4, 5];
sampleArray2 = sampleArray2.myFilter(function(element) {
    return element > 2; //random digit to see if the created method works
});
console.log(sampleArray2);

    //myFind

Array.prototype.myFind = function(callback) {
    for(let i=0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return this[i];
        }
    }
};
Array.prototype.myFindIndex = function(callback) {
    for(let i=0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};

const randomArray = [9, -9, 7, 5, 4, 88];
let foundValue = randomArray.myFind((value) => {
    return value > 6; //random digit to see if the created method works
});
console.log(foundValue);
let foundIndex = randomArray.myFindIndex((value) => {
    return value > 9; //random digit to see if the created method works
});
console.log(foundIndex);