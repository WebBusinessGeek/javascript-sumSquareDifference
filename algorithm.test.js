describe("Tests are working", function() {
    it("should return Tests are working", function() {
        var result = checkIfTestsAreWorking();
        expect(result).toBe("Tests are working");
    });
});

describe("sumOfTheSquaresOfRange", function() {
    it("should return 385 when arguments are int 1, and int 10", function() {
        var result = sumOfTheSquaresOfRange(1, 10);
        expect(result).toBe(385);
    });
});

describe("squareOfTheSumOfRange", function() {
    it("should return 3025, when arguments are int 1, and int 10", function() {
        var result = squareOfTheSumOfRange(1,10);
        expect(result).toBe(3025);
    });
});

describe("findDifference", function() {
    it("should return 2640, when arguments are int 385, and int 3025", function() {
        var result = findDifference(385, 3025);
        expect(result).toBe(2640);
    });
});

describe("findDifferenceOfSumOfRangeAndSquareOfSumOfRange", function() {
    it("should return 2640, when arguments are int 1, and int 10", function () {
        var result = findDifferenceOfSumOfRangeAndSquareOfSumOfRange(1, 10);
        expect(result).toBe(2640);
    });
});

describe("problem solved", function() {
    it("should return answer to problem", function() {
        var result = findDifferenceOfSumOfRangeAndSquareOfSumOfRange(1, 100);
        expect(result).toBe(25164150);
    });
});