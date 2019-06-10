function solution(people, limit) {
    let sorted = people.sort((a, b) => b - a);
    let answer = 0;
  
    while (sorted.length > 0) {
      let sum = sorted[0] + sorted[sorted.length - 1];
      if (sum <= limit) {
        sorted.pop();
        sorted.shift();
        answer++;
      } else {
        answer++;
        sorted.shift();
      }
    }
    return answer;
  }

  console.log(solution([70,50,80,50], 100));