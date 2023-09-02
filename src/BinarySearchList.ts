export default function bs_list(haystack: number[], needle: number): boolean {
  let hi = haystack.length;
  let lo = 0;

  while (hi > lo) {
    let mid = Math.floor((hi + lo) / 2);
    if (haystack[mid] === needle) {
      return true;
    }
    if (haystack[mid] > needle) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
