function loop(n, test, update, body) {
  let val = n;

  for (let i = val; i > 0; i--) {
    if (test(n)) {
      body(n);
      n = update(n);
    } else {
      return;
    }
  }
}

// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
