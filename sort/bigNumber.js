// [3, 30, 34, 5, 9] 	"9534330"
function solution(numbers) {
  let answer = "";
  let sorted = numbers.sort((a, b) => b - a);
  let maxLen = (sorted[0] + "").length;
  let indexArr = sorted.map(() => 1);
  //   let max = Math.pow(10, Number(maxLen));
  //   if (max > 100000) {
  //     max = 10000;
  //   }
  if (sorted[0] <= 0 || sorted[sorted.length - 1] > 1000) {
    return "0";
  }

  for (let i = sorted.length - 1; i >= 0; i--) {
    if ((sorted[i] + "").length < maxLen) {
      let addZero = 0;
      addZero = Math.pow(10, Number(maxLen) - Number((sorted[i] + "").length));
      if (sorted[i] === 1) {
        addZero = Math.pow(10, Number(maxLen) - 1);
        // console.log("..............", addZero);
      }
      sorted[i] *= addZero;
      indexArr[i] *= addZero;
    } else {
      break;
    }
  }
  //   console.log(sorted, indexArr);
  while (sorted.length) {
    let max = Math.max(...sorted);
    let dupchk = sorted.filter(e => e === max);
    let idx = 0;
    let org;
    idx = sorted.indexOf(max);
    if (dupchk.length === 1) {
      org = max / indexArr[idx];
      answer += org + "";
      sorted = sorted.filter(e => e !== max);
      indexArr.splice(idx, 1);
    } else {
      let indexes = [];
      let arr = [];
      while (idx !== -1) {
        indexes.push(idx);
        idx = sorted.indexOf(max, ++idx);
      }
      arr = indexes.map(e => max / indexArr[e]);
      arr = arr.sort();
      answer += arr.reduce((sum, val) => (sum += val + ""), "");
      sorted = sorted.filter(e => e !== max);
      indexes.forEach(e => indexArr.splice(e, 1));
    }
  }
  return answer;
}
// console.log(solution([100000,10000, 1]));
// console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([9, 10, 110, 1110, 11111]));
console.log(solution([1, 2, 3, 4]));

// console.log(solution([5, 50, 900]));
