import { Sort } from "../../sort.js";

export class Default extends Sort {
  static sort(array) {
    let arr = [...array];
    let moves = [];

    Default.mergeSort(moves, arr, 0, arr.length - 1);

    return moves;
  }

  static mergeSort(moves, arr, l, r) {
    if (l < r) {
      let m = Math.floor((l + r) / 2);
      Default.mergeSort(moves, arr, l, m);
      Default.mergeSort(moves, arr, m + 1, r);
      Default.merge(moves, arr, l, m, r);
    }
  }

  static merge(moves, arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1 + 1);
    let R = new Array(n2 + 1);

    for (let i = l; i <= m; i++) {
      L[i - l] = arr[i];
    }
    for (let i = m + 1; i <= r; i++) {
      R[i - (m + 1)] = arr[i];
    }

    L[n1] = Infinity;
    R[n2] = Infinity;

    let i = 0;
    let j = 0;

    for (let k = l; k <= r; k++) {
      if (L[i] < R[j]) {
        moves.push([k, L[i]]);

        arr[k] = L[i];
        i++;
      } else {
        moves.push([k, R[j]]);

        arr[k] = R[j];
        j++;
      }
    }
  }
}
