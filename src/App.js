import ExternalDependencies from './Components/ExternalDependencies/index.tsx'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { LOEPredictor } from './Components/LOEPredictor/index.tsx';
import { WorkDescription } from './Components/WorkDescription/index.tsx';
import CriticalPathDepth from './Components/CriticalPathDepth/index.tsx';
import FunctionalUnits from './Components/FunctionalUnits/index.tsx';
import AcceptanceCriteria from './Components/AcceptanceCriteria/index.tsx';
import RegressionRisk from './Components/RegressionRisk/index.tsx';
import Notes from './Components/Notes/index.tsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LOEPredictor></LOEPredictor>
        <FunctionalUnits></FunctionalUnits>
        <div className="descriptors">
          <fieldset id="basic-description">
            <legend>Work Description</legend>
            <WorkDescription></WorkDescription>
            <AcceptanceCriteria></AcceptanceCriteria>
          </fieldset>
          <fieldset id="extended-description">
            <legend>Extended Description</legend>
            <CriticalPathDepth></CriticalPathDepth>
            <ExternalDependencies></ExternalDependencies>
            <RegressionRisk></RegressionRisk>
          </fieldset>
        </div>
        <div id="notes">
          <fieldset>
            <legend>Additional Notes</legend>
            <Notes></Notes>
          </fieldset>
        </div>
      </div>
    </Provider>
  );
}

export default App;
