type Node<T> = {
  value: T;
  next?: Node<T>;
  previous?: Node<T>;
};

export default class DoublyLinkedList<T> {
  length: number;
  head?: Node<T>;
  tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  prepend(value: T): void {
    const node = { value } as Node<T>;

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
    const node = { value } as Node<T>;

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
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        const prev = curr?.previous;
        const next = curr?.next;

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

        this.length--;
        return value;
      } else {
        curr = curr.next;
      }
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }
    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }

    const prev = curr?.previous;
    const next = curr?.next;

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

    if (curr?.value) {
      this.length--;
    }

    return curr?.value;
  }
}
