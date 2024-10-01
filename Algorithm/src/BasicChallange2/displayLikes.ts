export const displayLikes = (arrayOfnames: Array<string>) => {
  let sentences = "";
  if (arrayOfnames.length === 0) sentences = "no one like this";
  if (arrayOfnames.length === 1) sentences = `${arrayOfnames[0]} likes this`;
  if (arrayOfnames.length === 2)
    sentences = `${arrayOfnames[0]} and ${arrayOfnames[1]} like this`;
  if (arrayOfnames.length === 3)
    sentences = `${arrayOfnames[0]}, ${arrayOfnames[1]} and ${arrayOfnames[2]} like this`;

  if (arrayOfnames.length > 3)
    sentences = `${arrayOfnames[0]}, ${arrayOfnames[1]} and ${
      arrayOfnames.length - 2
    } others like this`;

  return sentences;
};
export const displayLikes2 = (arrayOfnames: Array<string>) => {
  let sentences = "";
  switch (arrayOfnames.length) {
    case 0:
      sentences = "no one like this";
      break;
    case 1:
      sentences = `${arrayOfnames[0]} likes this`;
      break;
    case 2:
      sentences = `${arrayOfnames[0]} and ${arrayOfnames[1]} like this`;
      break;
    case 3:
      sentences = `${arrayOfnames[0]}, ${arrayOfnames[1]} and ${arrayOfnames[2]} like this`;
      break;

    default:
      sentences = `${arrayOfnames[0]}, ${arrayOfnames[1]} and ${
        arrayOfnames.length - 2
      } others like this`;
      break;
  }

  return sentences;
};
