import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
