// import logo from './logo.svg';
import './App.css';
import menu from './images/menu.png';
import ironHack from './images/ironHack.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">

    <div className="navbar">
    <img src={ironHack} alt="iron" />
   
   <img src={menu} alt="menu" />
    
    </div>

    <div className="App-header">
    <h1>Say Hello to<br></br> ReactJS </h1>
    <button>Awesome!</button>
    </div>
    

    <div className="Images">
    <div>  
      <img src={icon1} alt="icon1" />
      <h2>ASDF</h2>
      <p> Blah Blah Blah Blah Blah</p>
    </div>

    <div>  
      <img src={icon2} alt="icon2" />
      <h2>ASDF</h2>
      <p> Blah Blah Blah Blah Blah</p>
    </div>

    <div>  
      <img src={icon3} alt="icon3" />
      <h2>ASDF</h2>
      <p> Blah Blah Blah Blah Blah</p>
    </div>

    <div>  
      <img src={icon4} alt="icon4" />
      <h2>ASDF</h2>
      <p> Blah Blah Blah Blah Blah</p>
    </div>

    </div>
      
    </div>
  );
}

export default App;
