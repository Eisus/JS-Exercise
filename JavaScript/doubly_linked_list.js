/**
 * Created by Susie on 7/7/2017.
 */
function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
}
function DoublyLinkedList () {
    this.head = null;
    this.tail = null;
    this.size = 0;
}
DoublyLinkedList.prototype.add = function(data) {
    var node = new Node(data);
    if(this.head) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

};
DoublyLinkedList.prototype.remove = function(data) {
    var current = this.head;
    //var previous = this.head;
    while (current) {
        if (current.data === data) {
            if (current === this.head) {
                this.head = current.next;
                this.head.previous = null;
            } else if (current === this.tail) {
                this.tail = current.previous;
                this.tail.next = null;
            } else {
                current.previous.next = current.next;
                current.next.previous = current.previous;
            }
            this.size++;
        }
        current = current.next;
    }
};
DoublyLinkedList.prototype.insertBefore = function(data, toNodeData) {
    var current = this.head;
    var node = new Node(data);
    while (current) {
        if (current.data === toNodeData) {
            if (current === this.head) {
                current.previous = node;
                node.next = current;
                this.head = node;
            } else {
                current.previous.next = node;
                node.previous = current.previous;
                node.next = current;
                current.previous = node;
            }
            this.size++;
        }
        current = current.next;
    }
};
DoublyLinkedList.prototype.insertAfter = function(data, toNodeData) {
    var current = this.head;
    var node = new Node(data);
    while(current) {
        if (current.data === toNodeData) {
            if (current === this.tail) {
                current.next = node;
                node.previous = current;
                this.tail = node;
            } else {
                node.next = current.next;
                current.next = node;
                node.previous = current;
                node.next.previous = node;
            }
            this.size--;
        }
        current = current.next;
    }
};
DoublyLinkedList.prototype.traverse = function(fn) {
    var current = this.head;
    while(current) {
        if (fn) {
            fn(current);
        }
        current = current.next;
    }
};
DoublyLinkedList.prototype.print = function() {
    var current = this.head;
    var result = '';
    while (current) {
        result = result + current.data + ' ';
        current = current.next;
    }
    console.log(result);
};
DoublyLinkedList.prototype.size = function() {
    return this.size;
};

/////////////////////////////////////////////////////////
//TEST
/////////////////////////////////////////////////////////
var doubleLinkList = new DoublyLinkedList();
doubleLinkList.add(1);
doubleLinkList.add(2);
doubleLinkList.add(3);
//doubleLinkList.print();doubleLinkList.print();
doubleLinkList.insertBefore(5,1);
doubleLinkList.insertBefore(6,2);
//doubleLinkList.print();
doubleLinkList.insertAfter(7,3);
doubleLinkList.insertAfter(8,1);
doubleLinkList.remove(1);
doubleLinkList.remove(3);
doubleLinkList.print();
//console.log(doubleLinkList.tail.previous);
//console.log(doubleLinkList.tail.previous.next);