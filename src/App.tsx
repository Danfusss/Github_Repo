import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutRepository from "./components/AboutRepository";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repositories/:id" element={<AboutRepository />} />
      </Routes>
    </Router>
  );
}

export default App;
