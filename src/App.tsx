import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Cronograma from "./pages/cronograma/Cronograma";
import Disciplinas from "./pages/cronograma/Disciplinas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
