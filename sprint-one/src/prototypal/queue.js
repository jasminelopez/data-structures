var Queue = function() {
  var obj = {};

  Object.setPrototypeOf(obj, queueMethods);

  
  obj.storage = {};
  obj.index = 0;
  obj.len = 0;

  return obj;
};

var queueMethods = {};


queueMethods.enqueue = function(val) {
  this.storage[this.index] = val;
  this.index++;
  this.len++;
};

queueMethods.dequeue = function() {
  this.keys = Object.keys(this.storage);
  this.minKey = Math.min(...this.keys);
  this.val = this.storage[this.minKey];
  delete this.storage[this.minKey];
  this.len--;
  return this.val;
};

queueMethods.size = function() {
  if (this.len < 0) {
    return 0;
  }
  return this.len;
};