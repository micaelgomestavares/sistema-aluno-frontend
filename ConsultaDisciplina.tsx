import { useState } from 'react';
import './ConsultaDisciplina.css';
import { disciplinas } from './Disciplinas';

const CursoFilter = ({ cursoSelecionado, setCursoSelecionado }) => {
  const cursos = [...new Set(disciplinas.map(disciplina => disciplina.curso))];

  const handleChangeCurso = (event:any) => {
    setCursoSelecionado(event.target.value);
  };

  return (
    <select value={cursoSelecionado} onChange={handleChangeCurso}>
      {cursos.map(curso => (
        <option key={curso} value={curso}>
          {curso}
        </option>
      ))}
    </select>
  );
};

const SemestreFilter = ({ semestreSelecionado, setSemestreSelecionado}) => {
  const semestres = [...new Set(disciplinas.map(disciplina => disciplina.semestre))];

  const handleChangeSemestre = (event:any) => {
    setSemestreSelecionado(event.target.value);
  };

  return (
    <select value={semestreSelecionado} onChange={handleChangeSemestre}>
      <option value="">Todos os semestres</option>
      {semestres.map(semestre => (
        <option key={semestre} value={semestre}>
          {`Semestre ${semestre}`}
        </option>
      ))}
    </select>
  );
};

function ConsultaDisciplina() {
  
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [semestreSelecionado, setSemestreSelecionado] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  
  const disciplinasCurso = cursoSelecionado
    ? disciplinas.filter(disciplina => disciplina.curso === cursoSelecionado)
    : disciplinas;

  const disciplinasSemestre = semestreSelecionado
    ? disciplinasCurso.filter(disciplina => disciplina.semestre === semestreSelecionado)
    : disciplinasCurso;

  const disciplinasPesquisadas = pesquisa
    ? disciplinasSemestre.filter(disciplina => disciplina.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    : disciplinasSemestre;


  return (
    <div className="Search">
      <h1>Consulta de Disciplinas</h1>
      <input type="text" placeholder="Pesquisar disciplina" value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} />
      <CursoFilter cursoSelecionado={cursoSelecionado} setCursoSelecionado={setCursoSelecionado} />
      <SemestreFilter semestreSelecionado={semestreSelecionado} setSemestreSelecionado={setSemestreSelecionado} />     
     <br></br><br></br><br></br>
      <div className="Result">
        <ul>
        {disciplinasPesquisadas.map(disciplina => (
          <li key={disciplina.id} className="disciplina-item">
            <h2 className="disciplina-nome">{disciplina.nome}</h2>
            <p className="disciplina-detalhes">
              <span className="disciplina-professor">{disciplina.professor}</span>
              <span className="disciplina-horasAula">{disciplina.horasAula} horas de aula</span>
              {disciplina.situacao ==='cursando' && disciplina.aula.map(aula => (
               <div>
               <span className="disciplina-sala">{aula.sala}</span>
               <span className="disciplina-horarios">{aula.horarios}</span>
              </div>
              ))}
              
            </p>
          </li>
        ))}
        </ul>
      </div>
      
    </div>
  );
}

export default ConsultaDisciplina;