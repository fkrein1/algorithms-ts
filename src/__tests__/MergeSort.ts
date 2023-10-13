import merge_sort from '../MergeSort';

test('merge-sort', function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  expect(merge_sort(arr)).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
