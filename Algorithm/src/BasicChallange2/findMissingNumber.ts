export const findMissingNumber = (numbers: Array<number>) => {
  let missingNumber;
  let actualSum = 0;
  const length = numbers.length;
  if (length === 1) return 1;
  const incSorted = numbers.sort((a, b) => a - b);

  const maxNumber = incSorted[length - 1];
  const expectedSum = (maxNumber * (maxNumber + 1)) / 2;
  for (let i = 0; i < incSorted.length; i++) actualSum += incSorted[i];


  missingNumber = expectedSum - actualSum;
  return missingNumber;
};
export const findMissingNumber2 = (numbers: Array<number>) => {
    let missingNumber;
    let actualSum = 0;
    const length = numbers.length ;
    if (length === 1) return 1;
    const  n = length + 1 
    const expectedSum = (n * (n + 1)) / 2;
    // for (let i = 0; i < numbers.length; i++) actualSum += numbers[i];
    actualSum = numbers.reduce((sum,num)=> sum+num,0)
    
    missingNumber = expectedSum - actualSum;
    return missingNumber;
  };
