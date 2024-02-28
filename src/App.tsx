import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

import Cronograma from "./pages/Cronograma/Cronograma";
import Disciplinas from "./pages/Cronograma/Disciplinas";
import ConsultaDisciplina from "./pages/ConsultaDisciplina/ConsultaDisciplina";
import Mensagens from "./pages/Mensagens/Mensagens";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/consulta-disciplina" element={<ConsultaDisciplina />} />
          <Route path="/mensagens" element={<Mensagens />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
