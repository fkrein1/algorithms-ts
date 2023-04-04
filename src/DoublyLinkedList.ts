class DoublyNode<T> {
  value: T;
  next: DoublyNode<T> | null;
  previous: DoublyNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  reset() {
    this.next = null;
    this.previous = null;
  }
}

export default class DoublyLinkedList<T> {
  length: number;
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(value: T): void {
    const node = new DoublyNode(value);

    if (this.head) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;
  }

  append(value: T): void {
    const node = new DoublyNode(value);

    if (this.tail) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.tail = node;
      this.head = node;
    }

    this.length++;
  }

  remove(value: T): T | undefined {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        const prev = node?.previous;
        const next = node?.next;

        if (next) {
          next.previous = prev;
        } else {
          this.tail = prev;
        }

        if (prev) {
          prev.next = next;
        } else {
          this.head = next;
        }

        node.reset();
        this.length--;
        return value;
      } else {
        node = node.next;
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      if (node) {
        node = node.next;
      } else {
        return undefined;
      }
    }
    return node?.value;
  }

  removeAt(idx: number): T | undefined {
    let node = this.head;
    for (let i = 0; i < idx; i++) {
      if (node) {
        node = node.next;
      } else {
        return undefined;
      }
    }
    if (!node) return undefined;

    const prev = node?.previous;
    const next = node?.next;

    if (next) {
      next.previous = prev;
    } else {
      this.tail = prev;
    }

    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }

    node.reset();
    this.length--;

    return node.value;
  }
}
