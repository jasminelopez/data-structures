var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var index = 0;
  var lastAdded; //pointing to 


  list.addToTail = function(value) {
    
  
    //currently broken fork on the next 
    var stringIndex = index.toString(); 
    list[stringIndex] = new Node(value); 

    if (lastAdded !== undefined) {
      lastAdded.next = list[stringIndex]; //last added will point at current node 
    }
    // console.log(lastAdded.next);
    if (list.head === null) { //handles the 0th iteration with no contents
      list.head = list[stringIndex];
    }

    var formerTail = list.tail; 
    if (formerTail !== null) { 
      formerTail.next = list[stringIndex];
    }
    list.tail = list[stringIndex];
    lastAdded = list[stringIndex]; //lastAdded is defined in the first call
    index++;
  };

  list.removeHead = function() {
    var formerHeadNode;
    // find the head- if head is pointing to a node (if list is empty)
    //if head is pointing to the first node 
    if (list.head !== null) {
      formerHeadNode = list.head; //store the first elements next value in formerHead
      //current head node is the node we are removing
      var currentHeadNode = formerHeadNode.next; // We are trying to grab what it was pointing to before removing it
      //head is now pointing to the currect head node
      list.head = currentHeadNode; // reset head
    }
    return formerHeadNode.value;
  };

  list.contains = function(target) {
    //loop //
 
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
// head => {val:2,pointer:node2} => {val:2,pointer:node3}; => {val:2,pointer:node4}  {val:2,pointer:null} <=tail
// index = 0;
// list.tail = null
// list.head = null
// {
//   "0"{
//     value: 4,
//     next: 
//   }

// }