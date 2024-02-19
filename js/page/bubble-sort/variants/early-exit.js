import { Sort } from "../../sort.js";

export class EarlyExit extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      let swapped = false;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          // store clone of assignments
          moves.push([j, arr[j + 1]]);
          moves.push([j + 1, arr[j]]);

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }

    return moves;
  }
}
