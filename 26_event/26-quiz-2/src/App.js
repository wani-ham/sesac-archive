import './App.css';
import React, { useState } from 'react'
import SelectInfo from './SelectInfo'
import InputInfo from './InputInfo'
import OutputInfo from './OutputInfo'

function App() {
  const [fruit, setFruit] = useState({
    type: 'apple',
    backgroundColor: 'black',
    textColor: 'white'
  });
  const [text, setText] = useState("");

  return (
    <div className="App">
      <SelectInfo setFruit={setFruit}/> <br/>
      <InputInfo info={fruit} setText={setText} /> <br />
      <OutputInfo info={fruit} text={text} />
    </div>
  );
}

export default App;
