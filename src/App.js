import FunctionalLayers from './Components/FunctionalLayers/index.tsx'
import ExternalDependencies from './Components/ExternalDependencies/index.tsx'
import './App.css';
import { Provider } from 'react-redux';
import { store } from './services/store.ts';
import { LOEPredictor } from './Components/LOEPredictor/index.tsx';
import { WorkDescription } from './Components/WorkDescription/index.tsx';
import CriticalPathDepth from './Components/CriticalPathDepth/index.tsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LOEPredictor></LOEPredictor>
        <ul>
          <li><FunctionalLayers></FunctionalLayers></li>
          <li><ExternalDependencies></ExternalDependencies></li>

          <li><CriticalPathDepth></CriticalPathDepth></li>
          <li><WorkDescription></WorkDescription></li>
          {/* <li>Describe the work: (routine updates (.5), minor enhancement (1), new development (1.5), legacy (2), in discovery (3), experimental (5))</li> */}
          <li>Historic ticket/work split value (0, 1, 2, 3, 4, 5)</li>
        </ul>
      </div>
    </Provider>
  );
}

export default App;
