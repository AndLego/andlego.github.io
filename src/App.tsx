import { HashRouter, Routes, Route } from "react-router-dom";
import { BurguerBtn, Footer, Navbar, ScrollToTop } from "./components";
import Landing from "./Pages/Landing";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <BurguerBtn />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
