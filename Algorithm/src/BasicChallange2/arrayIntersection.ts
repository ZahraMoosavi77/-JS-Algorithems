export const arrayIntersection = (
  first: Array<number>,
  second: Array<number>
) => {
  let output: Array<number> = [];
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    if (second.includes(char) && !output.includes(char)) output.push(char);
  }
  return output;
};
