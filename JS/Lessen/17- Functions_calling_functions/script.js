//  WHAT CAN WE DO INSIDE OF A FUNCTION?

//  - almost any kind of code
//  - as much as you want or need


///////////////////////////////////////////////////////


// CALLING FUNCTIONS
const scream = function() {
    console.log("Aaaaaaaa!");
};

// Calling a function outside of a function
scream()
// Calling a function inside of a function
const makeNoise = function() {
    scream();
};
makeNoise();


/////////////////////////////////////////////////////////


// RETURNING VALUES

// works exactly the same

const add = function(numberA, numberB) {
    return numberA + numberB;
};

// The add function returns to this line, which
const eight = add(3, 5);
console.log(eight);

const doCalculation = function() {
    const six = add(2, 4);
    console.log(six);
};

doCalculation();

////////////////////////////////////////////////////////////////////


// DEBUGGING

// To see which functions are called in which order:
// use console.log

const makePositive = function(number) {
    console.log("Entering makePositive...");
    return Math.abs(number);
};
console.log(makePositive(-500));
console.log(makePositive(500));

///////////////////////////////////////////////////////////

const makeBigger = function(number) {
    console.log("Entering makeBigger...");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

console.log(makeBigger(8));
console.log(makeBigger(12));

///////////////////////////////////////////////////////////

const square = function(number) {
    console.log("Entering square of...");
    return number * number;
}

console.log(square(3));

///////////////////////////////////////////////////////////

const doComplexCalculation = function(number) {
    console.log("Entering doComplexCalculation...");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squareNumber = square(bigNumber);
    return squareNumber;
};

console.log(doComplexCalculation(-1));