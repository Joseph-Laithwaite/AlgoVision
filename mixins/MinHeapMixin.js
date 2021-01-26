import { BIconEmojiNeutralFill } from "bootstrap-vue";

export default {
    name:'Heap',
    data(){
        return{
            myHeap: new MinHeap()
        }
    },
    methods:{
        addItem(node){
            this.myHeap.insert(node);
        },
        removeMin(){
            this.myHeap.remove();
        },
        peakMin(){
            this.myHeap.peakMin();
        },
    },
    computed:{
        heapSize(){
            return myHeap.length;
        },
        arrayHeap(){
           return this.myHeap.heapAsArray() ;
        }
    }
}
// In a binary head stored in array use 1 base index
// if index of parent = i
// left child  = 2*i + 1
// right child = 2*i + 2

// and at child i, parent = Math.floor(i/2)

class MinHeaps {

    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null];
    }

    heapAsArray(){
        let arrayHeap=[];
        for(let elem of this.heap){
            arrayHeap.push(elem);
        }
        return arrayHeap;
    }

    peakMin () {
        //0(1) time
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1];
    }

    insert (node) {

        // Inserting the new node at the end of the heap array 
        // Time Complexity O(1)
        this.heap.push(node);
        console.log('insert item: ',node);
        
        // Finding the correct position for the new node ie. Heapify
        // Time complexity O(log n)
        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    removeMin() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1];
        
        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 1) { //heap has 2 or more items
            this.heap[1] = this.heap[this.heap.length - 1];   //Swap min at top of tree with right most child O(1) time
            this.heap.splice(this.heap.length - 1)          // O(n)
    
            // if (this.heap.length === 3) {
            //     if (this.heap[0] > this.heap[1]) {
            //         [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
            //     }
            //     return smallest
            // }
    
            let current = 0
            let leftChildIndex = current!==0 ? current * 2 : 1
            let rightChildIndex = leftChildIndex + 1
    
            while ( (this.heap[leftChildIndex] || this.heap[rightChildIndex]) &&
                    (this.heap[current] > this.heap[leftChildIndex]|Infinity || this.heap[current] > this.heap[rightChildIndex]|Infinity)) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]|Infinity) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }
                leftChildIndex = current * 2;
                rightChildIndex = leftChildIndex + 1;
            }
        }else if(this.heap.length > 0){ //heap has one item
            this.heap.pop();
        }else{  //heap empty
            return null;
        }        
        return smallest;
    }
}

class MinHeap {

    constructor () {
        /* Initialing the array heap and adding a dummy element at index 0 */
        this.heap = [null]
    }

    heapAsArray(){
        let arrayHeap=[];
        for(let elem of this.heap){
            arrayHeap.push(elem);
        }
        return arrayHeap;
    }
    
    peakMin () {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[1]
    }
    
    insert (node) {

        /* Inserting the new node at the end of the heap array */
        this.heap.push(node)

        /* Finding the correct position for the new node */

        if (this.heap.length > 1) {
            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current/2)*/
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {

                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[1]

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }
                return smallest
            }

            let current = 1
            let leftChildIndex = current * 2
            let rightChildIndex = current * 2 + 1

            while (this.heap[leftChildIndex] &&
                    this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] ||
                        this.heap[current] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]]
                    current = leftChildIndex
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]]
                    current = rightChildIndex
                }

                leftChildIndex = current * 2
                rightChildIndex = current * 2 + 1
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.splice(1, 1)
        } else {
            return null
        }

        return smallest
    }
}