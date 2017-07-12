/**
 * Created by Susie on 7/11/2017.
 */
function Node(data) {
    this.data = data;
    this.children = [];
}
function Tree() {
    this.root = null;
}
Tree.prototype.add = function(data, toNodeData) {
    var node = new Node(data);
    var parent = this.findBFS(toNodeData) ? findBFS(toNodeData):null;
    if (parent) {
        parent.children.push(node);
    } else {
        if (!this.root) this.root = node;
        else {
            return "Root node is already assigned"
        }
    }
};
Tree.prototype.remove = function(data) {
    if (this.root.data === data) {
        this.root = null;
    }
    var nodeList = [this.root];
    while(nodeList.length) {
        var node = nodeList.shift();
        for(var i= 0, len=node.children.length; i<len; i++) {
            if (node.children[i].data === data) {
                node.children.splice(i,1);
            } else {
                nodeList.push(node.children[i]);
            }
        }
    }
};
Tree.prototype.contain = function(data) {
    return this.findBFS(data) ? true: false;
};
Tree.prototype.findBFS = function(data) {
    var nodeList = [this.root];
    while(nodeList.length) {
        var node = nodeList.shift();
        if (node.data === data){
            return node;
        }
        for (var i= 0, len=node.children.length; i<len; i++) {
            nodeList.push(node.children[i]);
        }
    }
    return null;
};
Tree.prototype._preOrder = function(node, fn) {
    if (node) {
        if (fn) {
            fn(node)
        }
    }
    for (var i= 0,len=node.children.length; i<len; i++) {
        this._preOrder(node.children[i],fn);
    }
};
Tree.prototype._postOrder = function(node, fn) {
  if (node) {
      for(var i= 0,len=node.children.length; i<len; i++) {
          this._postOrder(node.children[i]);
      }
      if (fn) {
          fn(node);
      }
  }
};
Tree.prototype.traverseDFS = function(fn, method){
    var current = this.root;
    if (method) {
        this['_'+method](current, fn);
    }else {
        this._preOrder(current, fn);
    }
};
Tree.prototype.print = function() {
    if (!this.root) {
        console.log('No root is found!');
    }
    var seperate = new Node('|');
    var nodeList = [this.root, seperate];
    var str = '';
    while(nodeList.length) {
        var node = nodeList.shift();
        //Note the type of the data
        str += node.data.toString() + ' ';
        if (node === seperate && nodeList.length) nodeList.push(seperate);
    }
    for (var i= 0, len=node.children.length; i<len; i++) {
        nodeList.push(node.children[i]);
    }
    console.log(str.slice(0,-2).trim());
};
Tree.prototype.printByLevel = function() {
    if(!this.root) {
        return console.log('No root node found');
    }
    var newline = new Node('\n');
    var queue = [this.root, newline];
    var string = '';
    while(queue.length) {
        var node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
        }
    }
    console.log(string.trim());
};

