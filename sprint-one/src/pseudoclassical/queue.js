var Queue = function() {

  this.storage = {};
  this.index = 0;
  this.len = 0;
};


Queue.prototype.enqueue = function(val) {
  this.storage[this.index] = val;
  this.index++;
  this.len++;
};

Queue.prototype.dequeue = function() {
  this.keys = Object.keys(this.storage);
  this.minKey = Math.min(...this.keys);
  this.val = this.storage[this.minKey];
  delete this.storage[this.minKey];
  this.len--;
  return this.val;
};

Queue.prototype.size = function() {
  if (this.len < 0) {
    return 0;
  }
  return this.len;
};