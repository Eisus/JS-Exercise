/**
 * Created by Susie on 7/7/2017.
 */

//implement with singly linked list
function Node(data) {
    this.previous = null;
    this.data = data;
}
function Stack() {
    this.tail = null;
    this.size = 0;
}
Stack.prototype.push = function(data) {
    var node = new Node(data);
    node.previous =this.tail;
    this.tail = node;
    this.size++;
};
Stack.prototype.pop = function() {
    var data = this.tail.data;
    this.tail = this.tail.previous;
    this.size--;
    return data;
};
Stack.prototype.size = function() {
    return this.size;
};
Stack.prototype.print = function() {
    var current = this.tail;
    var result = '';
    while(current) {
        result = result + current.data + ' ';
        current = current.previous;
    }
    console.log(result);
};

////////////////////////////////////////////////////////
//TEST
////////////////////////////////////////////////////////
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();

