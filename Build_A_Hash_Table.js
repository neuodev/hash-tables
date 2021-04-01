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
}

class HashTable {
  constructor(size) {
    this.hashTable = new Array(size).fill(new LinkedList());
  }

  put(key, value) {
    const hash = this._hash(key);
    const hashTable = this.hashTable;

    let node = new Node(key, value);

    let linkedList = hashTable[hash];
    if (!linkedList.head) {
      linkedList.head = linkedList.tail = node;
    } else {
      let currentNode = linkedList.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return node;
  }

  _hash(key) {
    let hash = key % this.hashTable.length;
    return hash;
  }
}
