// export default function bs_list(haystack: number[], needle: number): boolean {
//   const mid = Math.floor(haystack.length / 2);

//   if (haystack[mid] === needle) {
//     return true;
//   }

//   if (haystack.length === 0) {
//     return false;
//   }

//   if (haystack[mid] > needle) {
//     return bs_list(haystack.slice(0, mid), needle);
//   } else {
//     return bs_list(haystack.slice(mid + 1, haystack.length), needle);
//   }
// }

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  
  while (lo < hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (haystack[mid] === needle) {
      return true;
    }

    if (needle > haystack[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return false;
}
