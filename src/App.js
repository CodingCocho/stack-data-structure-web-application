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

  const pushStack = () =>
  {
    const element = prompt("Enter an element to push to the Stack", 0)
    stack.push(element);
    setPointer(stack.getPointer())
  }

  const popStack = () =>
  {
    stack.pop();
    setPointer(stack.getPointer())
  }

  return (
    <div className="App">

        <div className='heading-elements'>
          <p id='title'>Data Structure Demonstration</p>
          <span id='data-structure-name'>Stack</span>
        </div>

        <div className='stack-container'>
          <div className='stack'>
            {stack.getStack().map( (element) =>
            {
              if(element === undefined)
              {
                return <div></div>
              }
              return <div className='stack-box'>{element}</div>
            })}
          </div>
        </div>
        
        <div className='stack-functions-container'>
          <button onClick={newStack}>New Stack</button>
          <button onClick={pushStack}>Push</button>
          <button onClick={popStack}>Pop</button>
        </div>
    </div>
  );
}

export default App;
