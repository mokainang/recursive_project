function power(base, exponent) {
    // Base case: Any number to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }

    // If the exponent is negative, calculate the positive exponent and take the reciprocal
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }

    // Recursive case: Multiply the base by the result of power(base, exponent - 1)
    return base * power(base, exponent - 1);
}

console.log(power(5, 3));
