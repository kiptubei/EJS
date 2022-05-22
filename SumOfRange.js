function range(start, end) {
  let arr = [];

  if (start < end) {
    for (let i = start; i <= end; i++) {
      arr.push(i)
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(range(1,10));
console.log(range(45,27));

function rangeStep(start, end,step = 1) {
    let arr = [];
  
    if (start < end) {
      for (let i = start; i <= end; i+=step) {
        arr.push(i)
      }
    } else {
      for (let i = start; i >= end; i-=step) {
        arr.push(i);
      }
    }
  
    return arr;
  }

  console.log(rangeStep(45,27,3));

  function sum(arr){
      let total = 0;
      for(let val of arr){
        total = val+total;
      }

      return total;
  }

  console.log(sum(range(1,10)))
