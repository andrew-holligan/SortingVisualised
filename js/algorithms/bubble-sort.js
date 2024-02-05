export class BubbleSort {
  static sort(array) {
    let arr = [...array];
    let swaps = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // store clone of elements being swapped
          swaps.push([j, j + 1]);
        }
      }
    }

    return swaps;
  }
}
