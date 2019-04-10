var Stack = function() {
  var someInstance = {};


  someInstance.len = 0;
  someInstance.pancakes = {};

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};


var stackMethods = {};
stackMethods.push = function(val) {
  this.pancakes[this.len] = val;
  this.len++;
};
stackMethods.pop = function() {
  this.val = this.pancakes[(this.len - 1)];
  delete this.pancakes[(this.len - 1)];
  this.len--;
  return this.val;
};
stackMethods.size = function() {
  if (this.len < 0) {
    return 0;
  }
  return this.len;

};

