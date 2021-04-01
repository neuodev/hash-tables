function fristNonRepeated(str: string) {
  if (!str) return false;
  if (str.length === 1) return str;
  str = str.toLowerCase();
  let hashTable = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== ' ') {
      if (hashTable[char]) {
        hashTable[char] = hashTable[char] + 1;
      } else {
        hashTable[char] = 1;
      }
    }
  }

  for (let key in hashTable) {
    let item = hashTable[key];
    if (item === 1) return key;
  }

  return false;
}

console.log(fristNonRepeated('daaid'));