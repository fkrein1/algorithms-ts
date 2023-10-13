type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(value: T): void {
    const newNode: Node<T> = { value };

    if (this.head) {
      newNode.prev = this.head;
    }

    this.head = newNode;
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const { value, prev } = this.head;
    this.head = prev;
    this.length--;

    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  getLength(): number {
    return this.length;
  }
}
