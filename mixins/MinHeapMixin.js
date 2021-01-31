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
        },
        arrayTree(){
            return this.myHeap.heapAsTreeObj();
        }
    }
}
// In a binary treem head stored in array use 1 base index
// if index of parent = i
// left child  = 2*i
// right child = 2*i + 1

// and at child i, parent = Math.floor(i/2)


class OtherMinHeap {

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

    //0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
    //1 2 2 3 3 3 3 4 4 4  4  4  4  4  4

    heapAsTreeObj(heap =this.heap){
        if(heap==null || heap.length<0) return 
        if(heap[0] == null) heap.shift;

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
class TreeObj {
    constructor (node) {
        this.tree = new Object;
        this.tree.node = node;
    }
}

class MinHeap {

    constructor () {
        this.heap = []
    }

    heapAsArray(){
        let arrayHeap=[];
        for(let elem of this.heap){
            arrayHeap.push(elem);
        }
        return arrayHeap;
    }


    // heapAsTreeObj(heap =this.heap){
    //     if(heap==null || heap.length<0) return 
    //     if(heap[0] == null) heap.shift;
    // }

    peakMin () {
        /* Accessing the min element at index 1 in the heap array */
        return this.heap[0];
    }
    
    insert (node) {
          /* Inserting the new node at the end of the heap array */
        this.heap.push(node)
        console.log('node added to end: ', node);
        /* Finding the correct position for the new node */
        console.log('HeapifyUp');
        if (this.heap.length > 0) {

            let current = this.heap.length - 1

            /* Traversing up the parent node until the current node (current) is greater than the parent (current-2/2)*/
            let parentIndex = Math.floor((current-1)/2);;
            console.log('current Index: ', current, ' is ', this.heap[current], ' parent Index: ', parentIndex, ' is ', this.heap[parentIndex]);
            while (current >= 0 && this.heap[parentIndex] > this.heap[current]) {
                console.log('parent larger than child so swap');
                /* Swapping the two nodes by using the ES6 destructuring syntax*/
                let temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[current];
                this.heap[current] = temp;
                // [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
                current = Math.floor((current-1)/2);
                parentIndex =  Math.floor((current-1)/2);
                console.log('current Index: ', current, ' is ', this.heap[current], ' parent Index: ', parentIndex, ' is ', this.heap[parentIndex]);
            }
        }
    }
    
    remove() {
        /* Smallest element is at the index 1 in the heap array */
        let smallest = this.heap[0];

        /* When there are more than two elements in the array, we put the right most element at the first position
            and start comparing nodes with the child nodes
        */
        if (this.heap.length > 2) {
            this.heap[0] = this.heap.pop();
            // this.heap.splice(this.heap.length - 1)

            if (this.heap.length === 2) {
                if (this.heap[0] > this.heap[1]) {
                    [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]];
                }
                return smallest;
            }

            let current = 0;
            let leftChildIndex = current * 2 + 1;
            let rightChildIndex = current * 2 + 2;

            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] &&
                    (this.heap[current] > this.heap[leftChildIndex] || this.heap[current] > this.heap[rightChildIndex])) 
            {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[current], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[current]];
                    current = leftChildIndex;
                } else {
                    [this.heap[current], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[current]];
                    current = rightChildIndex;
                }

                leftChildIndex = current * 2 + 1;
                rightChildIndex = current * 2 + 2;
            }
        }

        /* If there are only two elements in the array, we directly splice out the first element */

        else if (this.heap.length === 2) {
            this.heap.shift();
        } else {
            return null;
        }

        return smallest;
    }
}