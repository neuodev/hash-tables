function fristRepeated(str: string) {
  if (!str) return false;
  if (str.length === 1) return str;
  str = str.toLowerCase();
  let hashTable = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== ' ') {
      if (hashTable[char]) return char;
      hashTable[char] = 1;
    }
  }

  return false;
}

console.log(fristRepeated('green apple'));
