function reverseString(mainString: string) {
  let reverseOfMainString;
  reverseOfMainString = mainString.split("").reverse().join("");

  return reverseOfMainString;
}

// export default reverseString;

function reverseString2(mainString: string) {
  let reverseOfMainString = "";

  for (let i = mainString.length - 1; i >= 0; i--) {
    reverseOfMainString += mainString[i];
  }

  return reverseOfMainString;
}

export default reverseString2;
