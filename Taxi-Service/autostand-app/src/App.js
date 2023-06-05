
import './App.css';
import Autostand from '../src/Component/Near-Autostand/Autostand';
import AutostandTable from '../src/Component/Near-Autostand/Stand';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/autostand' element={<Autostand/>}/>
        <Route path='/autostand/table' element={<AutostandTable/>}/>

      </Routes>
    </div>
  );
}

export default App;
