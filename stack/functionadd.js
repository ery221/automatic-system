function solution(progresses, speeds) {
  let endArray = [];
  let answer = [];

  progresses.forEach((progress, i) => {
    endArray.push(Math.ceil((100 - progress) / speeds[i]));
  });

//   console.log(endArray)
  let index = 0;
  let max = 0;
  for (let i = 0; i < endArray.length; i++) {
    if (i === 0) {
      index = 0;
      max = endArray[i];
      answer[index] = 1;
    } else {
      if (max >= endArray[i]) {
        answer[index] = answer[index] + 1;
      } else {
        max = endArray[i];
        index++;
        answer[index] = 1;
      }
    }
  }
  return answer;
}

let a = solution([93, 30, 55], [1, 30, 5]);
// let a = solution([30, 93,  55], [30, 1, 5]);
// let a = solution([30], [30]);
console.log(a);
