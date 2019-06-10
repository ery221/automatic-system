//합계: 36.4 / 100.0
function solution(numbers) {
  let o = {};
  numbers.forEach((n, i) => {
    let first = n.toString().slice(0, 1);
    if (o[first] || o[first] === 0) {
      let str1 = [o[first], n].join("");
      let str2 = [n, o[first]].join("");
      o[first] = Number(str1) > Number(str2) ? str1 : str2;
    } else {
      o[first] = n + "";
    }
  });
  console.log(o);
  if (Object.keys(o).length === 1 && Object.keys(o)[0] === "0") return "0";

  let ordered = Object.keys(o).sort((a, b) => b - a);
  let answer = ordered.reduce((s, v) => (s += o[v]), "");
  return answer;
}

console.log(solution([3, 30, 34, 5, 9]));
//   console.log(solution([12,22,23,32]));
// console.log(solution([6, 10, 2]));
// console.log(solution([0, 0, 0]));
// console.log(solution([0, 0, 0]));

// console.log(solution([100000,10000, 1]));
// console.log(solution([4, 1, 2, 55]));
// console.log(solution([9, 10, 110, 1110, 11111]));
// console.log(solution([0,0,0,1000]));
// console.log(solution([0,0,1000,0]));
// console.log(solution([1000,0,0,0]));

function solution2(numbers) {
  let ob = { first: {}, data: [] };
  let idx = 0;
  numbers.forEach((n, i) => {
    let first = (n+'').charAt(0);
    if (ob.first[first]) {
      let str1 = [ob.first[first], n].join("");
      let str2 = [n, ob.first[first]].join("");
      ob.first[first] = str1 > str2 ? str1 : str2;
    } else {
      ob.first[first] = n + "";
      if (ob.data.length === 0) {
        ob.data.push(first);
        // console.log("first", first);
      } else {
        // console.log("!!", ob.data[0], first);
        if (ob.data[0] < Number(first)) {
          ob.data.splice(0, 0, first);
        } else {
          // console.log('first', first)
          for (let i = 0; i < ob.data.length; i++) {
            if (ob.data[i] < Number(first)) {
              idx = i;
              break;
            }
            idx = ob.data.length;
          }
          // console.log('-----')
          ob.data.splice(idx, 0, first);
        }
      }
    }
  });
  // console.log(ob);
  if (ob.data[0] === '0') return "0";
  return ob.data.reduce((sum, val) => (sum += ob.first[val]), "");
}
