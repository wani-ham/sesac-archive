import './App.css';
import Button from './button';
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
      <hr/>
      <Button link="https://www.google.com">Google</Button>
    </div>
  );
}

export default App;
