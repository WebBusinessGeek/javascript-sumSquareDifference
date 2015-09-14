function checkIfTestsAreWorking() {
    return "Tests are working";
}

function sumOfTheSquaresOfRange(rangeStart, rangeStop) {
    var sumOfSquaresOfRange = 0;
    while(!(rangeStart > rangeStop)) {
        sumOfSquaresOfRange += rangeStart * rangeStart;
        rangeStart++;
    }
    return sumOfSquaresOfRange;
}

function squareOfTheSumOfRange(rangeStart, rangeStop) {
    var sumOfRange = 0;
    while(!(rangeStart > rangeStop)) {
        sumOfRange += rangeStart;
        rangeStart++;
    }
    return sumOfRange * sumOfRange;
}

function findDifference(value1, value2) {
    var largerNumber = (value1 > value2) ? value1 : value2;
    var smallerNumber = (value1 < value2) ? value1 : value2;
    return largerNumber - smallerNumber;
}

function findDifferenceOfSumOfRangeAndSquareOfSumOfRange(rangeStart, rangeStop) {
    var sumOfSquaresOfRange = sumOfTheSquaresOfRange(rangeStart, rangeStop);
    var squareOfSumOfRange = squareOfTheSumOfRange(rangeStart, rangeStop);
    return findDifference(sumOfSquaresOfRange, squareOfSumOfRange);
}