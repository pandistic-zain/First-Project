import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Texts";
function App() {
  return (
    <>
      <Navbar title="Fitness Zone" />
      
      <div className = "container my-3">
      {/* <TextForm heading="Enter Text to Analyse" /> */}
      <TextForm />
      </div>
      
    </>
  );
}

export default App;
