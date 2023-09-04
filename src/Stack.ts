type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Stack<T> {
  length: number;
  head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): void {
    const node = { value } as Node<T>;
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    } else {
      const val = this.head.value;
      this.head = this.head.next;
      this.length--;
      return val;
    }
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
