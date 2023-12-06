import { HashRouter, Routes, Route } from "react-router-dom";
import { BurguerBtn, Navbar, ScrollToTop } from "./components";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";

function App() {

  return (
    <div className="Container">
      <HashRouter>
        <Navbar />
        <BurguerBtn />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
