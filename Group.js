class Group {
  constructor() {
    this.values = [];
  }

  add(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
    }
  }

  delete(val) {
    this.values = this.values.filter((v) => v !== val);
  }

  has(val) {
    return this.values.includes(val);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
