var Queue = function() {
  var someInstance = {};

  someInstance.index = 0;
  someInstance.len = 0;
  someInstance.storage = {};

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.index] = val;
  this.index++;
  this.len++;
};
queueMethods.dequeue = function() {
  //keys
  this.keys = Object.keys(this.storage);
  //min key
  this.minKey = Math.min(... this.keys);
  //val storage[minkey]
  this.val = this.storage[this.minKey];

  // delete val
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

