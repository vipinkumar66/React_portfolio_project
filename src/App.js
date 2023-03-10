import './App.css';
import {Header, Navbar, Home, Footer} from './components/index'
import { About } from './containers';

const App = () => {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header/>
      {/* <Home/> */}
      <About/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
