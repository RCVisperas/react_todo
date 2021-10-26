import './App.css';
import NavBar from './components/header';
import Home from './components/Home';


function App() {
  return (//call the function of Navbar which in the header.js and Home function in the Home.js
    <div className="App">
            
        <NavBar /> 

      <div>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
