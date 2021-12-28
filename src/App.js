import './App.css';
import Stack from './Stack'
import { useState, useEffect } from "react";

/*
This React.js App will run the frontend of the Stack data structure.
*/
function App() {
  
  // Holds our useStates
  // An useState for the Stack to keep track of the data structure 
  const [stack, setStack] = useState(new Stack(5))
  // An useState for the pointer to keep track of when the page needs to render
  const [pointer, setPointer] = useState(stack.getPointer())

  // An useEffect the notifies the console of a render which is depended on the 
  // pointer changing
  useEffect(() => {
    console.log("render");
  }, [pointer])
  
  // Local function to set the new Stack 
  const newStack = () =>
  {
    setStack(new Stack(5));
  }

  // Local function to push an element into the Stack
  const pushStack = () =>
  {
    // Prompt the user for the element
    const element = prompt("Enter an element to push to the Stack", 0)
    // Call the Stack push method
    stack.push(element);
    // Set the pointer in the useState to rerender
    setPointer(stack.getPointer())
  }

  // Local function to pop an element from the Stack
  const popStack = () =>
  {
    // Call the Stack pop method
    stack.pop();
    // Set the pointer in the useState to rerender
    setPointer(stack.getPointer())
  }

  const peekStack = () =>
  {
    // Call the Stack peek method
    stack.peek();
  }

  return (
    <div className="App">

        <div className='heading-elements'>
          <p id='title'>Data Structure Demonstration</p>
          <span id='data-structure-name'>Stack</span>
        </div>

        <div className='stack-container'>
          <div className='stack'>
            {/* Map out the Stack and create appropriate divs for elements */}
            {stack.getStack().map( (element) =>
            {
              // Return empty div for undefined elements
              if(element === undefined)
              {
                return <div></div>
              }
              // Return stack-box div for elements 'defined'
              return <div className='stack-box'>{element}</div>
            })}
          </div>
        </div>
        
        <div className='stack-functions-container'>
          <button onClick={newStack}>New Stack</button>
          <button onClick={pushStack}>Push</button>
          <button onClick={popStack}>Pop</button>
          <button onClick={peekStack}>Peek</button>
        </div>
    </div>
  );
}

export default App;
