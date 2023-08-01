function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error('Input is not an array');
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new Error('Array contains non-integer values');
      }
      sum += num;
    }
  
    return sum;
  }
module.exports = {sumArray}