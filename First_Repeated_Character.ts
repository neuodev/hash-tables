function fristRepeated(str: string) {
  if (!str) return false;
  if (str.length === 1) return str;
  str = str.toLowerCase();
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== ' ') {
      if (set.has(char)) return char;
      set.add(char);
    }
  }

  return false;
}

console.log(fristRepeated('green apple'));
