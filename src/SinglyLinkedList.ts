type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SinglyLinkedList<T> {
  public length: number;
  public head?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  prepend(value: T): void {
    const node: Node<T> = { value };
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insertAt(value: T, idx: number): void {
    const node: Node<T> = { value };
    let prev = this.head;
    let curr = this.head;

    for (let i = 0; i < idx && curr; i++) {
      prev = curr;
      curr = curr.next;
    }

    if (prev && prev.next) {
      node.next = curr;
      prev.next = node;
    }

    this.length++;
  }

  append(value: T): void {
    const node: Node<T> = { value };

    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }

    this.length++;
  }

  remove(value: T): T | undefined {
    let prev = this.head;
    let curr = this.head;

    while (curr) {
      if (curr.value === value && prev && prev.next) {
        if (prev === curr) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.length--;
        return curr.value;
      }
      prev = curr;
      curr = curr.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr?.next;
    }
    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    let prev = this.head;
    let curr = this.head;

    for (let i = 0; i < idx && curr; i++) {
      prev = curr;
      curr = curr?.next;
    }
    if (prev === curr) {
      this.head = this.head?.next;
      this.length--;
      return curr?.value;
    }

    if (prev && prev.next) {
      prev.next = curr?.next;
      this.length--;
    }

    return curr?.value;
  }
}
