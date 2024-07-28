var expect = function(val) {
    const toBe = function(num) {
        if (num === val) {
            return true;
        } else {
            throw new Error('Not Equal');
        }
    };

    const notToBe = function(num) {
        if (num !== val) {
            return true;
        } else {
            throw new Error('Equal');
        }
    };

    return { toBe, notToBe };
};
