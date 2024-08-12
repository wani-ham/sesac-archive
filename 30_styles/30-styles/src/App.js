// import './styles/App.css';
import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SaasComponent';
import StyledComponent from './StyledComponent';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';

function App() {
  return (
    <div className="App">
      <CssModuleComponents /> <br />
      <SassComponent /> <br />
      <StyledComponent /> <br />
      {/* <Quiz1 /> <hr /> */}
      <Quiz2 /> <br/>
    </div>
  );
}

export default App;
