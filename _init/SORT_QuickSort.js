function quickSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let pivot = l;
  let left = l + 1;
  let right = r;

  while (left <= right) {
    while (left <= r && arr[left] <= arr[pivot]) {
      left++;
    }
    while (right > l && arr[right] >= arr[pivot]) {
      right--;
    }
    if (left > right) {
      let temp = arr[pivot];
      arr[pivot] = arr[right];
      arr[right] = temp;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
  }

  quickSort(arr, l, right - 1);
  quickSort(arr, right + 1, r);
}
