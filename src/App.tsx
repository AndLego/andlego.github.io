import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import { Navbar } from "./components";

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
