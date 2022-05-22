function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    // list.value = arr[i];
    // list.rest = list;
    list = {value: arr[i],rest: list}
  }

  return list;
}

console.log(arrayToList([1, 2, 3]));



function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }


  let list2 = arrayToList([1, 2, 3]);

  console.log(listToArray(list2))