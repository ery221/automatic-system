function solution(tangle) {
  for (const [i, t] of tangle.entries()) {
    let next_t = tangle[i + 1];
    if (i === tangle.length - 1) break;

    if (i === 0) {
      // tangle[1] = t.map((e, i) => [e + next_t[i], e + next_t[i + 1]])[0];
      t.forEach((e, i) => {
        tangle[1][i] = e + next_t[i];
        tangle[1][i + 1] = e + next_t[i + 1];
      });
    } else {
      // console.log(t, next_t);
      let temp = [];
      t.forEach((e, i) => {
        // console.log(e, e + next_t[i], e + next_t[i + 1]);
        if (i === 0) {
          temp.push(e + next_t[i]);
          temp.push(e + next_t[i + 1]);
          // console.log('1.', temp)
        } else {
          if (e + next_t[i] > temp[i]) {
            temp[i] = e + next_t[i];
          }
          temp.push(e + next_t[i + 1]);
          // console.log('2.', temp)
        }
      });
      //console.log(tangle[i], i);
      tangle[i + 1] = temp;
    }
  }
  //   console.log(tangle);
  return Math.max(...tangle[tangle.length - 1]);
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));