type Node<T> = {
  value: T;
  next?: Node<T>;
  previous?: Node<T>;
};

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(value: T): void {
    const newNode: Node<T> = { value };

    if (this.head) {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  append(value: T): void {
    const newNode: Node<T> = { value };

    if (this.tail) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  remove(value: T): T | undefined {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        const prev = current.previous;
        const next = current.next;

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
        current = current.next;
      }
    }
    return undefined;
  }

  get(index: number): T | undefined {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current?.value;
  }

  removeAt(index: number): T | undefined {
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }

    const prev = current?.previous;
    const next = current?.next;

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

    if (current?.value) {
      this.length--;
    }

    return current?.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}
