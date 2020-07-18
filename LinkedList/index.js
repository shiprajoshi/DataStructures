function Node(value, next){
    this.value = value;
    this.next = next;
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

   //insert first node
    insertFirst(data){
         this.head = new Node(data, this.head);
    }

    //insert last node
    // insertLast(data){
    // let last = new Node(data);

    // if (!this.head){
    //     this.head = last
    // } else {
    //         let current = this.head;
    //         while(current.next) {
    //         current = current.next
    //         }
    //     current.next = last
    //     }
    // }

    insertLast(data) {
        const node = new Node(data);
        if (!this.tail) {
            this.tail = node
            this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
    }

    //delete first node
    deleteHeadNode(){
        if(this.head){
            let current = this.head;
            this.head = current.next; 
        }
    }

    //delete tail node
    deleteTailNode(){
        if(this.head){
            let currentNode= this.head;
            while(currentNode.next && currentNode.next.next){
                currentNode = currentNode.next;
            }
            currentNode.next = null;

        }
    }

    //delete at
    deleteAt(value){
        if(this.head){
            let currentNode = this.head;
            while(currentNode && currentNode.next.next){
                if(currentNode.next.value == value){
                    currentNode.next = currentNode.next.next;
                    break;
                }
                currentNode= currentNode.next;
            }
        }
    }

    //reverse
    reverse() {
        if (this.head) {
            let currentNode = this.head;
            let  newHead = null;
            
            while(currentNode) {
                const next = currentNode.next
                const temp = newHead
                newHead = currentNode
                newHead.next = temp
                currentNode = next
            }
            
            this.head = newHead
        }
    }

    //size of a given linked list
    size(){
        if(!this.head)
        return 0;
        else{
            let current= this.head;
            let count = 1;
            while(current && current.next){
                count++;
                current = current.next;
            }
            return count;
        }
    }
    
    //size of a given linked list with recursion
    sizeWithRecursiveApproach(current=this.head){
        if(current == null){
            return 0;
        }else{
            return 1+this.sizeWithRecursiveApproach(current.next)
        }

    }

    //return value at a particular index
    value_at(index){
        let currentNode= this.head
        if(index== 0){
            return currentNode.value;
        }
        else{
            let count = 0;
            while(currentNode&&currentNode.next){
                if(count== index) return currentNode.value;
                count++;
                currentNode= currentNode.next;
            }   
        }
    }

    //insert at a particular index 
    insert(index, value){
        let current = this.head;
        if(!current){
            this.head = new Node(value, null)
        }else{
            if(index==0){
                this.head= new Node(value, this.head)
            }
            let count = 0;
            while(current){
                if(index-1 == count) {
                    let newNode = new Node(value, current.next)
                    current.next = newNode;
                    return;
                }
                count++;
                current = current.next;
            }

        }

    }

    //delete at a particular index

    deleteAtIndex(index){
        if(this.head){
            if(index==0){
                this.head = this.head.next;
                return;
            }
            let currentNode = this.head;
            let count = 0;
            while(currentNode){
                if(count == index-1){
                    currentNode.next = currentNode.next.next;
                    break;
                }
                count++;
                currentNode = currentNode.next;
            }
        }
    }

    //delete nth node from the end
    delete_value_n_from_end(index){
        if(this.head){
            let currentNode = this.head;
            let count =0;
            while(currentNode){
                count++;
                currentNode = currentNode.next;
            }
            currentNode = this.head;
            console.log(count, 'size!!!')
            let delete_at_index = count - index;
            count = 0
            while(currentNode){
                if(count == delete_at_index-2){
                    currentNode.next = currentNode.next.next;
                    break;
                }
                count++;
                currentNode= currentNode.next;
            }
        }
    }

    //return nth node from the end
    value_n_from_end(index){
        if(this.head){
            let currentNode = this.head;
            let count =0;
            while(currentNode){
                count++;
                currentNode = currentNode.next;
            }
            currentNode = this.head;
            console.log(count, 'size!!! in value at')
            let at_index = count - index;
            count = 0
            while(currentNode){
                if(count == at_index-1){
                    return currentNode.value
                }
                count++;
                currentNode= currentNode.next;
            }
        }
    }
     
    //print list
    printList(){
        let current = this.head;
        while(current){
            console.log(current.value ,'list');
            current = current.next;
        }
    }
}

const list = new LinkedList()
list.insertFirst(10);
list.insertFirst(20);
list.printList()
list.insertLast(40)
// list.printList()
// list.insertLast(20);
// list.insertLast(30);
// list.insertLast(40);
// list.insertLast(50);
// list.insertLast(60);
// list.insertLast(70);
// list.insertLast(80);
// list.insertLast(90);
// list.insertLast(100);
// list.insertFirst(00)
// list.printList();
// list.deleteHeadNode();
// console.log('deleted head');
// list.printList();
// list.deleteTailNode();
// console.log('delete tail node')
// list.printList();
// list.deleteAt(30);
// console.log('delete at node')
// list.printList();
// // console.log('revese')
// // list.reverse();
// console.log('size is', list.size(), this.head)
// list.printList();
// console.log(list.sizeWithRecursiveApproach(), 'with recursion')
// console.log('value at 3' ,list.value_at(3))

////list.insert(0,89);
// // list.printList()
// list.insert(2,70);
// // console.log('inserted at 2')
// // list.printList();
// list.insert(3,100)
// list.insert(4,90)
//list.insert(2,980)
// list.printList();
// list.deleteAtIndex(1)
// list.printList();
// // list.insert(3,98000)
// list.insert(0,98000)

// // list.printList();

// list.insert(0,11190)

// list.printList();
// console.log('inserted at 0');
// list.deleteAtIndex(3);
// console.log('delete at 3');
// list.printList()
// console.log('revese')
// list.reverse();
// list.printList();
// list.delete_value_n_from_end(0)
// console.log('delte deom ')
// list.printList();
// console.log(list.value_n_from_end(0), 'value at 1')
//list.mergeTwoLists(10,20)
//console.log(list.mergeTwoLists(10,20), '=========')