import './App.css';
import './style/Display.css';
import './style/ButtonPad.css';
import Display from './components/Display';
import ButtonPad from './components/ButtonPad';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("React Calculator");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  return (
    <div className="App">
      <div className='container'>
        <Display 
        display={display} />
        <div className='buttonContainer'>
        <ButtonPad
        display={display}
        setDisplay={setDisplay}
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}/>
        </div>
        <div id="name">Bobby De Luna</div>
      </div>
    </div>
  );
}

export default App;
