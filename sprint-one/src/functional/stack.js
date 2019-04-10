var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var mostRecent = null;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    // mostRecent = storage[size];
    size++;
  };

  someInstance.pop = function() {
    var val = storage[(size - 1)];
    delete storage[(size - 1)];
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
