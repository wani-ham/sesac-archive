import './App.css';
import Counter from './Counter'
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';
import CounterQuiz from './CounterQuiz';
import CounterFunctionQuiz from './CounterFunctionQuiz.js';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <SayFunction></SayFunction>
      <CounterFunction value="Plus 1"></CounterFunction>
      <CounterQuiz></CounterQuiz>
      <CounterFunctionQuiz></CounterFunctionQuiz>
    </div>
  );
}

export default App;
