import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <GlobalStyles />
    </div>
  );
}

export default App;
