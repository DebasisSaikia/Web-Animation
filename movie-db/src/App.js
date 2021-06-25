import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<Movies />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <GlobalStyles />
    </Router>
  );
}

export default App;
