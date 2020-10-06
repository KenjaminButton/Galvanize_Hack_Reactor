console.log("\n");
console.log("#4 Comma Separated Integers");


function solution(integers) {
  if (integers.length > 0 && integers.length < 3) {
    return integers.join(",")
  }

  var result = [];
  var start = 0;
  var next = 1;
  var end = 2;
  
  while (start < integers.length) {

    if (integers[end] - integers[next] === 1 && integers[next] - integers[start] === 1) {

      while (integers[end] - integers[next] === 1) {
        next = end;
        end = end + 1;
      }

      let seq = integers.slice(start, end);
      result.push(`${seq[0]}-${seq[seq.length-1]}`)
      start = end;
      next = end + 1;
      end = end + 2 ;

    } else {

      result.push(integers[start]);
      start = next;
      next = end;
      end = end + 1;

    }
  }
  return result.join(",")
}


console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

console.log(solution([-4, -3, -2, -1, 2, 3, 5, 6, 12, 13, 14, 15, 17]));
// returns "-4--1,2,3,5,6,12-15,17"


