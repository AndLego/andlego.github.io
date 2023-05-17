import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import { BurguerBtn, Footer, Navbar } from "./components";

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <BurguerBtn />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
