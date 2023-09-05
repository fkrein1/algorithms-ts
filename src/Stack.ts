type Node<T> = {
  value: T;
  prev?: Node<T>;
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
      node.prev = this.head;
      this.head = node;
    }
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    } else {
      const head = this.head;
      this.head = this.head.prev;
      this.length--;
      return head.value;
    }
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
