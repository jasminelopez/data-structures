var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // {}
  this.len = 0;
  this.pancakes = {};
  this.val;

};

Stack.prototype.push = function(val) {
  this.pancakes[this.len] = val;
  this.len++;
};
Stack.prototype.pop = function() {
  this.val = this.pancakes[(this.len - 1)];
  delete this.pancakes[(this.len - 1)];
  this.len--;
  return this.val;
};
Stack.prototype.size = function() {
  if (this.len < 0) {
    return 0;
  }
  return this.len;
};

