import react from "react";
import './App.css'
import { originals, actions } from "./urls";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <br />
      <Rowpost url={originals} title="Netflix Originals"/>
      <Rowpost url={actions} title="Action Movies" isSmall/>
      <Rowpost url={actions} title="Action Movies" isSmall/>
      
    </div>
  );
}

export default App;
