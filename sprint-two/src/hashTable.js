


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
  // console.log(this._storage)
};

HashTable.prototype.insert = function(key, value) {
  // chevkLimit() helper if usedNodes >75% max
  //hashing function
  var index = hasher(key, this._limit);
  var bucket = [];
};

HashTable.prototype.retrieve = function(key) {
  var index = hasher(key, this._limit);
};

HashTable.prototype.remove = function(key) {
  // checkLimit() helper if used nodes  <25% max
  var index = hasher(key, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


