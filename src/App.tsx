import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BurguerBtn, Navbar, ScrollToTop } from "./components";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <BurguerBtn />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;