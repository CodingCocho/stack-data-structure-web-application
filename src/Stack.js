/*
This class implements the Stack data structure which follows LIFO which means last-in first-out.
This is implemented with the function push which inserts an element into the Stack at the first
empty location and the function pop which removes the last element pushed. 
*/
export default class Stack {
    // Data fields
    // Holds the size of the Stack
    #size = 0;
    // Holds the location where we need to push a new element into the Stack
    #pointer = 0;
    // Holds the array which is used as data structure for the Stack
    #stack = new Array(this.#size);
  
    /* Main constructor for the Stack class
          @param size - the size of the Stack created
      */
    constructor(size) {
      this.#size = size;
      this.#stack = new Array(size);
    }
  
    // Returns the size data field of the Stack class
    getSize() {
      return this.#size;
    }
  
    // Returns the pointer data field of the Stack class
    getPointer() {
      return this.#pointer;
    }
  
    // Returns the stack data field of the Stack class
    getStack() {
      return this.#stack;
    }
  
    /* Push a new element into the Stack
          @param element - the element being pushed into the Stack
      */
    push(element) {
      // Check first if the Stack is full
      if (this.isFull()) {
        // Alert the user the Stack is full therefore we cannot add a new element
        alert('Pushing into a full Stack.');
        return;
      }
  
      // Else we push the new element into the Stack
      this.#stack[this.#pointer] = element;
      // Alert the user we pushed successfully
      alert("Pushing into Stack: " + element);
      // Locate the pointer to the next empty location in the Stack
      this.#pointer++;
    }
  
    /* Pops the last element pushed into the Stack
      @return data - the last element pushed into the Stack
      */
    pop() {
      // Check first if the Stack is empty
      if (this.isEmpty()) {
        // Alert the user the Stack is empty therefore we cannot remove an element
        alert('Popping from an empty Stack.');
        return;
      }
  
      // Locate the pointer to the new empty location
      this.#pointer--;
      // Holds the data we are going to remove
      const data = this.#stack[this.#pointer];
      // Replace the data with an undefined element
      this.#stack[this.#pointer] = undefined;
      // Alert the user we popped successfully 
      alert("Popping from Stack:" + data)
      // Return the element popped
      return data;
    }
  
    // Returns the last element pushed into the Stack
    peek() {
      // Check first if the Stack is empty
      if (this.isEmpty()) {
        // Alert the user that the Stack is empty therefore we cannot peek
        alert('Peeking from an empty Stack.');
        return;
      }
  
      //Alert the user what element is being peeked
      alert("Peeking Stack: " + this.#stack[this.#pointer - 1]);
      // Return the last element pushed into the Stack
      return this.#stack[this.#pointer - 1];
    }
  
    // Returns true if the Stack is full
    isFull() {
      return this.#pointer === this.#size;
    }
  
    // Returns true if the Stack is empty
    isEmpty() {
      return this.#pointer === 0;
    }
  
    // Prints out the Stack
    printStack() {
      console.log(this.#stack);
    }
  }


