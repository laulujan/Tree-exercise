class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  var nodo1 = new Node(5);
  nodo1.left = new Node(2);
  nodo1.right = new Node(3);
  
  function isBinaryTree(node, min = null, max = null) {
    if (!node) return true;
    if (max !== null && node.value >= max) {
      return false;
    }
    if (min !== null && node.value <= min) {
      return false;
    }
    const leftSide = isBinaryTree(node.left, min, node.value);
    const rightSide = isBinaryTree(node.right, node.val, max);
  
    return leftSide && rightSide;
  }
  
  console.log(isBinaryTree(nodo1));
  
  nodo1.left.right = new Node(7);
  console.log(isBinaryTree(nodo1));