var Tree = function(value) {
  //entire tree object
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value); 

  this.children.push(child);
};

treeMethods.contains = function(target) { 
  var foundIt = false;
  var childrenArr = this.children;

  if (childrenArr.length) {
    for (var i = 0; i < childrenArr.length; i++) {
      var child = childrenArr[i];
      if (child.value === target) {
        foundIt = true;
      } else {
        if (child.contains(target)) {
          foundIt = true;
        }
      }
    }
  }
  return foundIt;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// Tree - O1
// addChild - O1
// contains - O(n)
