import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Components/About/Aboutus";
const Home = lazy(() => import("./Components/Home/Home"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
