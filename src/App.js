import './App.css';
import {Navbar, Home} from './components/index'
import { About, Projects } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
      <BrowserRouter>
      <Navbar/>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/projects' element={<Projects/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
