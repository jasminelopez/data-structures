

var Stack = function() {
  var obj = {};

  Object.setPrototypeOf(obj, stackMethods);

  obj.len = 0;
  obj.pancakes = {};
  obj.val;
  
  return obj;
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



