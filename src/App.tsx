import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import ConsultaDisciplina from "./pages/ConsultaDisciplina/ConsultaDisciplina";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta-disciplina" element={<ConsultaDisciplina />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
