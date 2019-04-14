var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  
  return set;
};

var setPrototype = {};

setPrototype.add = function(name) {
  this._storage[name] = name;
};

setPrototype.contains = function(name) {
  if (this._storage[name]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(name) {
  if (this._storage[name]) {
    delete this._storage[name];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
