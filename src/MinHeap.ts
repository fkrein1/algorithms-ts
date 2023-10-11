export default class MinHeap {
  public length: number;
  public data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const leftChildIndex = this.leftChild(idx);
    const rightChildIndex = this.rightChild(idx);

    if (idx >= this.length || leftChildIndex >= this.length) {
      return;
    }

    const leftChildValue = this.data[leftChildIndex];
    const rightChildValue = this.data[rightChildIndex];
    const curr = this.data[idx];

    if (leftChildValue > rightChildValue && curr > rightChildValue) {
      this.data[idx] = rightChildValue;
      this.data[rightChildIndex] = curr;
      this.heapifyDown(rightChildIndex);
    } else if (rightChildValue > leftChildValue && curr > leftChildValue) {
      this.data[idx] = leftChildValue;
      this.data[leftChildIndex] = curr;
      this.heapifyDown(leftChildIndex);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const parentIndex = this.parent(idx);
    const parentValue = this.data[parentIndex];
    const curr = this.data[idx];

    if (parentValue > curr) {
      this.data[idx] = parentValue;
      this.data[parentIndex] = curr;
      this.heapifyUp(parentIndex);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}
