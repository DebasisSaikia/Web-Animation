import "./App.css";
import Animate1 from "./components/Animate1";
import Drag from "./components/Drag";
import KeyFrame from "./components/KeyFrame";
import Variants from "./components/Variants";

function App() {
  return (
    <div className="App">
      <h1>Framer motion</h1>
      <Animate1 />
      {/* <Drag /> */}
      {/* <Variants /> */}
      <KeyFrame />
    </div>
  );
}

export default App;
