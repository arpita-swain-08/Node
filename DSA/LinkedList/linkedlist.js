//! What is a Linked List
//? A Linked List is a linear data structure where elements(called nodes) are connected using pointers

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    add(val){
        const n=new Node(val);
        console.log(!this.head);
        if(this.head===null){
            console.log(!this.head);
            this.head=n;
        }
        else{
            let current=this.head;
            while(current.next!==null){
                console.log(current.next);
                current=current.next;
            }
            current.next=n;
        }
        this.size++;
    }
    //remove a value from first
    deleteFirst(){
        if(this.head===null){
            return null;
        }

        this.head=this.head.next;
        this.size--;
    }

    deleteLast(){
        if(this.head===null){
            return null;
        }
        if(this.head.next===null){
            this.head=null;
            this.size--;
            return;
        }
        let current=this.head;
        let prev=null;
        while(current.next.next!==null){
            current=current.next;
        }
        current.next=null
        this.size--;
    }

    deleteValue(val){
        if(!this.head){
            return null;
        }
        
        if(this.head.data===val){
            this.head=this.head.next;
        }

        let current=this.head;
        while(current.next!==null){
            if(current.next.data===val){
                current.next=current.next.next;
                return;
            }
            current=current.next;
        }
    }

    search(val){
        let current=this.head
        if(!current){
            return null;
        }

        while(current!==null){
            if(current.data===val){
                return true
            }
            current=current.next
        }
        return false;
    }

    display(){
        console.log(this.head)
        let current=this.head;
        let res="";
        while(current!==null){
            res=res+current.data+"->";
            current=current.next;
        }
        res=res+null;
        console.log(res);
    }


}
const l=new LinkedList()
l.add(10);
l.add(20);
l.add(30);
l.add(40); 
l.add(50);
console.log(l.size);
l.display();
l.deleteFirst();
l.deleteLast();
l.display();
console.log(l.search(10));
console.log(l.search(50));
console.log(l.search(80));
console.log(l.size);
l.deleteValue(20);
l.display();

