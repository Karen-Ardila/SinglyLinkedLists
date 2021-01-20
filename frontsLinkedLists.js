// First Problem of To Do 1 (Strings)

// var str = "Pl ayTha tF u nkyM usi c........!@ "
// var new_str = ""
// var ex_str = "qwertyuiopasdfghjklzxcvbnm"

// for(var i=0; i < str.length; i++){
//     if(ex_str.toUpperCase().includes(str[i].toUpperCase())){
//         new_str += str[i]
//     }
// }

// console.log(new_str)

// Fronts assignment (Singly Linked Lists)

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    //methods go here
    front() {
        //if(this.head == null)
        if (!this.head) {
            return null
        }
        return this.head.val
    }

    removeFront() {
        if (!this.head) {
            return null
        }
        this.head = this.head.next
        return this.head
    }

    addFront(value) {
        var newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        return this.head
    }
}

contains(value){
    var runner = this.head
    while(runner.val == value){
        if(runner.val == value){
            return true
        }
    }
    return false
}

length(){
    var runner = this.head
    var count = 0
    while(runner != null){
        count++
        runner = runner.next
    }
    return count
}

display (){
    var runner = this.head
    var str = ''
    while(runner !=){
        str += runner.val + " "
        runner = runner.next    }
        
        return str;
}


var myNode1 = new Node("Reptar")
var myNode2 = new Node("Angelica")
var myNode3 = new Node("Tommy")
var sll1 = new SLL()
sll1.head = myNode1
myNode1.next = myNode2
myNode2.next = myNode3

var sll2 = new SLL()

console.log(sll1.front())
console.log(sll2.front())

console.log(sll1.removeFront())
console.log(sll2.removeFront())

console.log(sll1.addFront("Dil"))