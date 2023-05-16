import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import { BurguerBtn, Navbar } from "./components";

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <BurguerBtn />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
