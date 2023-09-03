import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Texts";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar title="Fitness Zone" />
      
      <div className = "container my-3">
      <TextForm heading="Enter Text to Analyse" />
     <About/>
      </div>
      
    </>
  );
}

export default App;
