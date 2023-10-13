export default class RingBuffer<T> {
  private buffer: T[];
  private size: number;
  private writeIndex: number = 0;
  private readIndex: number = 0;

  constructor(size: number) {
    this.size = size;
    this.buffer = new Array<T>(size);
  }

  push(item: T): void {
    this.buffer[this.writeIndex] = item;
    this.writeIndex = (this.writeIndex + 1) % this.size;
  }

  get(idx: number): T | undefined {
    if (idx < 0 || idx >= this.size) {
      return undefined;
    }

    return this.buffer[(this.readIndex + idx) % this.size];
  }

  pop(): T | undefined {
    if (this.readIndex === this.writeIndex) {
      return undefined;
    }

    const item = this.buffer[this.readIndex];
    this.readIndex = (this.readIndex + 1) % this.size;
    return item;
  }
}
