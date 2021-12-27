import './App.css';
import Stack from './Stack'
import { useState } from "react";

function App() {
  
  const [stack, setStack] = useState(new Stack(5))

  return (
    <div className="App">

        <div className='heading-elements'>
          <p id='title'>Data Structure Demonstration</p>
          <span id='data-structure-name'>Stack</span>
        </div>

        <div className='stack-container'>
          <div className='stack'>
            <div className='stack-box'>1</div>
            <div className='stack-box'>2</div>
            <div className='stack-box'>3</div>
            <div className='stack-box'>4</div>
            <div className='stack-box'>5</div>
          </div>
        </div>
        
        <div className='stack-functions-container'>
          <button>New Stack</button>
          <button>Push</button>
          <button>Pop</button>
        </div>
    </div>
  );
}

export default App;
