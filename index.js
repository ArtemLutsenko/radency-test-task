function loadGrain(levels) {
  const levelLength = levels.length;
  let countOfGain = 0;

  if (levelLength < 3) {
    return 0;
  }

  for (let i = 0; i < levelLength - 2; i++) {
    if (levels[i] < levels[i + 1]) {
      continue;
    }

    const remainingArr = levels.slice(i + 2);
    const currentNumber = levels[i];
    const maxNumberInRemainigArr = Math.max(...remainingArr);

    if (currentNumber <= maxNumberInRemainigArr) {
      for (let j = i + 1; currentNumber >= levels[j]; j++) {
        countOfGain += currentNumber - levels[j];
        i = j;
      }
    } else {
      for (let j = i + 1; maxNumberInRemainigArr !== levels[j]; j++) {
        countOfGain += maxNumberInRemainigArr - levels[j];
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
console.log(loadGrain([4, 1, 3]));
console.log(loadGrain([4, 1, 2, 3]));
console.log(loadGrain([4, 1, 1, 1, 5, 3]));
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log(loadGrain([2, 0, 1, 5, 2, 7]));
console.log(loadGrain([2, 4, 2]));
console.log(loadGrain([7, 4]));
console.log(loadGrain([]));
