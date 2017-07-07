/**
 * Created by Susie on 7/6/2017.
 */
//Linked lists allow for efficient insertion or removal of elements from
//any position in the sequence
function Node(data) {
    this.data = data;
    this.next = null;
}
function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}
SinglyLinkedList.prototype.add = function(data) {
    var node = new Node(data);
    if(this.head) {
        this.tail.next = node;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    this.size++;
};
//SinglyLinkedList.prototype.remove = function(data) {
//    var current = this.head;
//    var previous = this.head;
//    while(current) {
//        if(current.data === data) {
//            if (current === this.head) {
//                this.head = current.next;
//            }else if (current === this.tail) {
//                this.tail = previous;
//            }
//            previous.next = current.next;
//            this.size--;
//        }else {
//            previous = current;
//        }
//        current = current.next;
//    }
//};
SinglyLinkedList.prototype.remove = function(data) {
    var previous = this.head;
    var current = this.head;
    while(current) {
        if (current.data === data) {
            if (current === this.head) {
                this.head = this.head.next;
            } else if (current === this.tail) {
                this.tail = previous;
            }
            previous.next = current.next;
            this.size++;
        } else {
            previous = current;
        }
        current = current.next;
    }
};

SinglyLinkedList.prototype.insertAfter = function (data, toNodeData) {
    var node = new Node(data);
    var current = this.head;
    while (current) {
        if(current.data === toNodeData) {
            if (current === this.tail) {
                current.next = node;
                this.tail = node;
                //At first, do not have the following code and then it runs infinitely. Because if the data to
                //be inserted equals to the tail, after insert, the condition current.data = toNodeData can still
                //be satisfied.
                current = this.tail;
                ///////////////////////////////////
            } else {
                node.next = current.next;
                current.next = node;
            }
            this.size++;
            current = current.next;
        }
        current = current.next;
    }
};

SinglyLinkedList.prototype.insertBefore = function (data, toNodeData) {
    var node = new Node(data);
    var current = this.head;
    var previous = this.head;
    while (current) {
        if (current.data ===toNodeData) {
            if (current === this.head) {
                node.next = current;
                this.head = node;
            } else {
                previous.next = node;
                node.next = current;
            }
            this.size++;
        }
        previous = current;
        current = current.next;
    }
};
SinglyLinkedList.prototype.getSize = function() {
  return this.size;
};
SinglyLinkedList.prototype.traverse = function(fn) {
    var current = this.head;
    while(current) {
        if(fn) {
            fn(current)
        }
        current = current.next;
    }
};
SinglyLinkedList.prototype.print = function() {
    var current = this.head;
    var result = '';
    while (current) {
        result = result + current.data + ' ';
        current = current.next
    }
    console.log(result);

};

///////////////////////////////////////////////////////////////////////////////////////
//TEST
///////////////////////////////////////////////////////////////////////////////////////
var list = new SinglyLinkedList();
list.add(2);
list.add(3);
list.add(4);
list.add(5);
//list.remove(3);
list.insertBefore(1,2);
list.print();
