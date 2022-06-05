const SCRIPTS = require("./scripts.js");

let ans = SCRIPTS.filter((S) => (S.direction = "ttb")).map((S) => S.year);

console.log(ans);
