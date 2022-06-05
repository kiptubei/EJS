let arr = [2, 3, 4, 5, 7];
let result = [];

arr.forEach((val) => {
  val *= 2;
  result.push(val);
});

console.log(result);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
