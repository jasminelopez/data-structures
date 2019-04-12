var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var index = 0;


  list.addToTail = function(value) {
    var stringIndex = index.toString();
    list[stringIndex] = new Node(value);
    if (list.head === null) {
      list.head = list[stringIndex];
    }
    var formerTail = list.tail;  
    if (formerTail !== null) {
      formerTail.next = list[stringIndex];
    }
    list.tail = list[stringIndex];
    index++;
  };

  list.removeHead = function() {
    // find the head
    // store head in a var
    //set head to stored head's pointer
  };

  list.contains = function(target) {
    //loop
  };
  return list;
};
//constructor node
var Node = function(value) {
  var node = {};

  
  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// head => {val:2,pointer:node} => {val:2,pointer:node}; => {val:2,pointer:node} <=tail
