import React from 'react';
import './App.css';
import Student from './components/Student';
import Card from './components/Card';

function App() {
  // #1.
  const handleClick = (name: string, age: number): void => {
      console.log(`Salut, Je m'appelle ${name}. J'ai ${age} ans !`);
    }
    
  }
  return (
    <div className="App">
      <Student name="John" age={12} handleClick={handleClick}/>
      <hr />
      <Card title="오늘 배울 것은?">
          <p>TypeScript with React</p>
      </Card>
    </div>
  );
}

export default App;
