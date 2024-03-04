import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "src/pages/Home";

import Cronograma from "src/pages/cronograma/Cronograma.tsx";
import Disciplinas from "src/pages/cronograma/Disciplinas.tsx";
import ConsultaDisciplina from "src/pages/ConsultaDisciplina/ConsultaDisciplina.tsx";
import Mensagens from "src/pages/Mensagens/Mensagens.tsx";
import Cursos from "src/pages/matricula/cursos.tsx";
import ConsultaHorario from "./pages/ConsultaHorario/ConsultaHorario";
import SegundaChamada from "./pages/SolicSegChamada/SegundaChamada";


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
          <Route path="/horarios" element={<ConsultaHorario />} />
          <Route path="/segunda-chamada" element={<SegundaChamada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
