type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(value: T): void {
    const node = { value } as Node<T>;

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const head = this.head;
    this.head = this.head.next;
    this.length--;

    if(this.length === 0) {
      this.tail = undefined
    }

    return head?.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
