class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addValue(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    print() {
         let current = this.head
         while(current){
            console.log(current.data)
            current = current.next
         }
    }
}

const l1 = new LinkedList()

// for(let i=0;i<=20;i++)

l1.addValue(10)
l1.addValue(20)
l1.print()
console.log(l1.size)