function findMaxNumber(mainArray: Array<number>) {
  let largestNumber = -Infinity;
  for (let i = 0; i < mainArray.length; i++) {
    if (mainArray[i] > largestNumber) largestNumber = mainArray[i];
  }
  return largestNumber;
}

// export default findMaxNumber;

const  findMaxNumber2 = (mainArray: Array<number>) => Math.max(...mainArray);

export default findMaxNumber2;
