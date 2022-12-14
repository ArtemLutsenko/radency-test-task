function loadGrain(levels) {
  const levelLength = levels.length;
  let countOfGain = 0;

  if (levelLength < 3) {
    return 0;
  }

  for (let i = 0; i < levelLength - 2; i++) {
    if (levels[i] <= levels[i + 1]) {
      continue;
    }

    const remainingArr = levels.slice(i + 2);
    const currentNumber = levels[i];
    const maxNumberInRemainigArr = Math.max(...remainingArr);

    if (currentNumber <= maxNumberInRemainigArr) {
      for (let j = i + 1; currentNumber > levels[j]; j++) {
        countOfGain += currentNumber - levels[j];
        i = j;
      }
    } else {
      for (let j = i + 1; maxNumberInRemainigArr !== levels[j]; j++) {
        if (maxNumberInRemainigArr > levels[j]) {
          countOfGain += maxNumberInRemainigArr - levels[j];
        }
        i = j;
      }
    }
  }

  return countOfGain;
}

/*   loadGrain([4, 1, 3]) // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0 */
/* console.log(loadGrain([4, 1, 3]), 2);
console.log(loadGrain([4, 1, 2, 3]), 3);
console.log(loadGrain([1, 2, 3, 3, 4, 3, 3, 2, 1]), 0);
console.log(loadGrain([4, 1, 1, 1, 5, 3]), 9);
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]), 7);
console.log(loadGrain([2, 0, 1, 5, 2, 7]), 6);
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4])); */
console.log(
  loadGrain([
    46, 7, 38, 34, 21, 11, 12, 6, 30, 32, 46, 26, 45, 1, 28, 33, 36, 40, 12, 26,
    38, 4, 27, 16, 45, 1, 0, 24, 5,
  ])
);
