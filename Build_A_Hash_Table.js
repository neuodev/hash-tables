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

  set(value) {}
}

class HashTable {
  constructor(size) {
    this.hashTable = new Array(size);
  }

  put(key, value) {
    const idx = this._hash(key);
    let bucket = this.hashTable[idx];
    if (!bucket) {
      const linkedList = new LinkedList();
      this.hashTable[idx] = linkedList;
    }
    // loop over the linkedlist to make sure that does not store a doublicated key
    let currentNode = this.hashTable[idx].head;
    while (currentNode) {
      if (currentNode.node.key === idx) {
        currentNode.node.value = value;
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    // add the node to the end of the linked list
    const node = this.hashTable[idx].push(key, value);
    return node;
  }
  get(ke) {}

  _hash(key) {
    let hash = key % this.hashTable.length;
    return Math.abs(hash);
  }
}

const hashTable = new HashTable(10);
// console.log(hashTable.put(1, 'A'));
console.log(hashTable.put(2, 'A'));
console.log(hashTable.put(2, 'B'));
console.log(hashTable.put(2, 'C'));
console.log(hashTable);
