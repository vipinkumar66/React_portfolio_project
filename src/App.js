import './App.css';
import {Navbar, Home, Footer} from './components/index'
import { About } from './containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
      <BrowserRouter>
      <Navbar/>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
          {/* <Footer/> */}
        </div>
      </BrowserRouter>
  );
}

export default App;
