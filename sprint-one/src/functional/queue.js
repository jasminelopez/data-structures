var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var index = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    size++;
  };
  
  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var minKey = Math.min(...keys);
    var val = storage[minKey];
    delete storage[minKey];
    size--;
    return val;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };
  return someInstance;
};


