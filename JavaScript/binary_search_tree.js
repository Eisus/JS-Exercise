/**
 * Created by Susie on 7/12/2017.
 */
var Node = function(data){
    this.data = data;
    this.left = null;
    this.right = null;
};
var BinarySearchTree = function() {
  this.root = null;
};
BinarySearchTree.prototype.add = function(data) {
    var node = new Node(data);
    if (!this.root) {
        this.root = node;
    } else {
        var current = this.root;
        while (current) {
            if (node.data < current.data) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else if (node.data > current.data) {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            } else { break; }
        }
    }
};
BinarySearchTree.prototype.remove = function(data) {
    var that = this;
    var removeNode = function(node, data) {
        if (!node) return null;
        if (data === node.data ) {
            if(!node.left && !node.right) {
                return null;
            }
            if(!node.left) {
                return node.right;
            }
            if(!node.right) {
                return node.left;
            }

            var temp = that.getMin(node.right);

        }

    };
    this.root = removeNode(this.root, data);
};
BinarySearchTree.prototype.getMin = function(node) {
    // Note that the binary search tree hold the property that the
    // key in each node must be greater than all keys stored in the
    // left sub-tree, and smaller than all keys in right sub-tree.
    // the the minimum value must be the most bottom left one.
    if (!node) node = this.root;
    while (node.left) node = node.left;
    return node.data;
};
BinarySearchTree.prototype.getMax = function(node) {
    if (!node) {
        return this.root;
    }
    while (node) node = node.right;
    return node.data;
};





