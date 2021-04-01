function hash(input: string, arrayLength: number) {
  let hash = 0;
  if (input.length == 0) {
    return hash;
  }
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  hash = hash % arrayLength;
  return hash;
}

console.log(hash('Ahmed', 100));
