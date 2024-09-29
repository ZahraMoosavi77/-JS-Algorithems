import reverseString2 from "./reverseString";

function isPallindrom(mainString: string) {
  let isMainStringPallindrom: boolean = true; // شرط که فقط عدد و حروف رو چک نمکینه

  for (let i = 0; i < mainString.length; i++) {
    isMainStringPallindrom =
      mainString[i] === mainString[mainString.length - i - 1];
  }
  return isMainStringPallindrom;
}

export default isPallindrom;
function isPallindrom2(mainString: string) {
  const formatedString = mainString
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const reverseString = mainString
    .toLocaleLowerCase()
    .split("")
    .reverse()
    .join("");
  let isMainStringPallindrom = formatedString === reverseString;
  return isMainStringPallindrom;
}

// export default isPallindrom2;

function isPallindrom3(mainString: string) {
  const formatedString = removeNonAlphaNumeric(mainString.toLocaleLowerCase());
  const reverseString = reverseString2(formatedString);
  return formatedString === reverseString;
}

function removeNonAlphaNumeric(str: string) {
  let formattedstr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedstr += char;
    }
  }
  return formattedstr;
}

function isAlphanumeric(char: string) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code >= 57) || //numbers 0-9
    (code >= 91 && code >= 122) // a-z
  );
}

// export default isPallindrom3;
