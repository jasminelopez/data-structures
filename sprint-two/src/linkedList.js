var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var index = 0;
  var lastAdded; //pointing to 


  list.addToTail = function(value) {
  
    list[index] = new Node(value); 

    if (lastAdded !== undefined) {
      lastAdded.next = list[index]; //last added will point at current node 
    }

    if (list.head === null) { //handles the 0th iteration with no contents
      list.head = list[index];
    }

    var formerTail = list.tail; 

    if (formerTail !== null) { 
      formerTail.next = list[index];
    }

    list.tail = list[index];
    lastAdded = list[index]; 
    index++;
  };

  list.removeHead = function() {
    var formerHeadNode;
    // find the head- if head is pointing to a node (if list is empty)
    //if head is pointing to the first node 

    if (list.head !== null) {
      formerHeadNode = list.head; //store the first elements next value in formerHead
      var currentHeadNode = formerHeadNode.next; // We are trying to grab what it was pointing to before removing it
      //head is now pointing to the currect head node
      list.head = currentHeadNode; 
    }
    return formerHeadNode.value;
  };

  list.contains = function(target) {
    
    var checkingNode;
    if (checkingNode === undefined) {
      checkingNode = list.head; 
    }
    while (list.tail !== checkingNode) {
      if (checkingNode.value === target) {
        return true;
      } else {
        checkingNode = checkingNode.next;
      }
      if (list.tail.value === target) {
        return true;
      }
    }
    return false; 
  };
  return list;
};

var Node = function(value) {
  var node = {};


  node.value = value;
  node.next = null;
  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// head => {val:2,pointer:node2} => {val:2,pointer:node3}; => {val:2,pointer:node4}  {val:2,pointer:null} <=tail
