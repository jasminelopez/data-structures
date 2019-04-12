class Stack {

  constructor() {
    this.len = 0;
    this.pancakes = {};
    this.val;
  }

  push(val) {
    this.pancakes[this.len] = val;
    this.len++;
  }

  pop () {
    this.val = this.pancakes[(this.len - 1)];
    delete this.pancakes[(this.len - 1)];
    this.len--;
    return this.val;
  }

  size () {
    if (this.len < 0) {
      return 0;
    }
    return this.len;
  }
}


