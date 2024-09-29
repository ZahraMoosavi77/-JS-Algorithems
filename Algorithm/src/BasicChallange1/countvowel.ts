export const countVowel = (mainString: string) => {
  let count: number = 0;
  const formatedString = mainString.toLocaleLowerCase();
  
  for (let i = 0; i < formatedString.length; i++) {
    const char = formatedString[i];
    
    if (char === "a" || char ==="e" || char ==="o" || char ==="i" || char ==="u") count++;
  }
  return count;
};
