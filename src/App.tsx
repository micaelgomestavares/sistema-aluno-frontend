import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "src/pages/Home";

import Cronograma from "src/pages/Cronograma/Cronograma.tsx";
import Disciplinas from "src/pages/Cronograma/Disciplinas.tsx";
import ConsultaDisciplina from "src/pages/ConsultaDisciplina/ConsultaDisciplina.tsx";
import Mensagens from "src/pages/Mensagens/Mensagens.tsx";
import Cursos from "src/pages/Matricula/cursos.tsx";


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
          <Route path="/pedidos-matricula" element={<Cursos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
