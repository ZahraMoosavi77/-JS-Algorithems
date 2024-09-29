export const removeDuplicate = (mainarray: any) => {
  let withoutDuplicateArray;
  withoutDuplicateArray = Array.from(new Set(mainarray));

  return withoutDuplicateArray;
};

export const removeDuplicate2 = (mainarray: any) => {
  let withoutDuplicateArray: Array<any> = [];

  for (let i = 0; i < mainarray.length; i++) {
    const char = mainarray[i];

    if (!withoutDuplicateArray.includes(char)) {
      withoutDuplicateArray.push(char);
    }
  }

  return withoutDuplicateArray;
};
