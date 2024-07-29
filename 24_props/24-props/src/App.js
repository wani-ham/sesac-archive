import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name="SeSAC" />
      <hr/>
      <FunctionComponent />
      <FunctionComponent name="SeSAC" />
    </div>
  );
}

export default App;
