class Node {
  constructor(key, value) {
    this.node = {
      key,
      vlaue,
    };
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class HashTable {
  constructor(size) {
    this.hashTable = new Array(size).fill(new LinkedList());
  }

  put(k, v) {}

  _hash(value) {
    let hash = value % this.hashTable.length;
    return hash;
  }
}
