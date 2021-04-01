class Node {
  constructor(key, value) {
    this.node = {
      key,
      value,
    };
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(key, value) {
    const node = new Node(key, value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return node;
  }
}

class HashTable {
  constructor(size) {
    this.hashTable = new Array(size);
  }

  put(key, value) {
    const idx = this._hash(key);
    const hashTable = this.hashTable;
    if (!hashTable[idx]) {
      const linkedList = new LinkedList();
      hashTable[idx] = linkedList;
    }
    const node = hashTable[idx].push(key, value);
    return node;
  }

  _hash(key) {
    let hash = key % this.hashTable.length;
    return Math.abs(hash);
  }
}

const hashTable = new HashTable(10);
// console.log(hashTable.put(1, 'A'));
console.log(hashTable.put(2, 'A'));
