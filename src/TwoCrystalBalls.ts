export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.round(Math.sqrt(breaks.length));
  let n = -1;

  for (let i = jump; i < breaks.length; i += jump) {
    if (breaks[i]) {
      n = i;
      break
    }
  }

  for (let i = n - jump; i < n; i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return n;
}
