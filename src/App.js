// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes  , Route} from 'react-router-dom'
import Home from './component/Home/Home';
import PositiveNegative from './component/PostiveNegative/PositiveNegative';
import Nadi from './component/Nadi/Nadi';
import Vaastu from './component/Vaastu/Vaastu';
import BodyParts from './component/BodyParts/BodyParts';
import Diseases from './component/Diseases/Dieases';
import Chakra from './component/Chakra/Chakra';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/positive-negative' element={<PositiveNegative/>} />
          <Route path='/nadi' element={<Nadi/>} />
          <Route path='/vaastu' element={<Vaastu/>} />
          <Route path='/body-parts' element={<BodyParts/>} />
          <Route path='/diseases' element={<Diseases/>} />
          <Route path='/chakra' element={<Chakra/>} />






        </Routes>
      </Router>
    </div>
  );
}

export default App;
