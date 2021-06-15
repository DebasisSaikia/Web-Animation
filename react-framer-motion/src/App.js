import "./App.css";
import Animate1 from "./components/Animate1";
import Drag from "./components/Drag";
import FramerHook from "./components/FramerHook";
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
      <FramerHook />
    </div>
  );
}

export default App;
