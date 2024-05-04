/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newVal = new Node(val)

    if(this.size === 0){
      this.first = newVal
      this.last = newVal
      this.size = 1
    }else{
      newVal.next = this.first
      this.first = newVal
      this.size += 1
    }
    return undefined
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw new Error('Stack is empty')
    }
    let oldHeadVal;
    
    if(this.size === 1){
      oldHeadVal = this.first.val
      this.first = null
      this.last = null
    }else{
      let oldHead = this.first
      oldHeadVal = oldHead.val
      this.first = oldHead.next
    }
    this.size--;
    return oldHeadVal;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.size === 0){
      throw new Error('Stack is empty')
    }
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true
    }
    return false
  }
}

module.exports = Stack;
