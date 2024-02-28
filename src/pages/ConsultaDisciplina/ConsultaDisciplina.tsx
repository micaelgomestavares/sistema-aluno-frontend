import { useState } from 'react';
import { disciplinas } from 'src/pages/ConsultaDisciplina/Disciplinas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';

const CursoFilter = ({ cursoSelecionado, setCursoSelecionado }: any) => {
  const cursos = [...new Set(disciplinas.map(disciplina => disciplina.curso))];

  const handleChangeCurso = (event: any) => {
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
}; 1

const SemestreFilter = ({ semestreSelecionado, setSemestreSelecionado }: any) => {
  const semestres = [...new Set(disciplinas.map(disciplina => disciplina.semestre))];

  const handleChangeSemestre = (event: any) => {
    setSemestreSelecionado(event.target.value);
  };

  return (
    <select className="ml-3" value={semestreSelecionado} onChange={handleChangeSemestre}>
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
    <>
      <main className="flex justify-center align-center">
        <section className="my-24">
          <div className="flex justify-between">
            <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Consulta de Disciplinas</h1>
            <a href="/"><Button>Voltar</Button></a>
          </div>
          <Input type="text" placeholder="Pesquisar disciplina" className='mt-3' value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} />
          <div className="my-3">
            <CursoFilter cursoSelecionado={cursoSelecionado} setCursoSelecionado={setCursoSelecionado} />
            <SemestreFilter semestreSelecionado={semestreSelecionado} setSemestreSelecionado={setSemestreSelecionado} />
          </div>
          <div className="grid grid-cols-4 gap-4 my-6">
            {disciplinasPesquisadas.map(disciplina => (
              <Card key={disciplina.id} className="w-[350px]">
                <CardHeader>
                  <CardTitle className='mb-[3px]'>{disciplina.nome}</CardTitle>
                  {disciplina.situacao === 'cursando' && <Badge className="max-w-[85px]">Matriculado</Badge>}
                  {disciplina.situacao === 'concluído' && <Badge className="max-w-[75px]" variant={'concluded'}>Concluído</Badge>}
                </CardHeader>
                <CardContent className="flex flex-col">
                  <span className="disciplina-professor">Professor: {disciplina.professor}</span>
                  <span className="disciplina-horasAula">Quantidade de horas: {disciplina.horasAula}</span>
                  {disciplina.situacao === 'cursando' && disciplina.aula.map(aula => (
                    <div>
                      <span className="disciplina-sala">{aula.sala}</span><br></br>
                      <span className="disciplina-horarios">{aula.horarios}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main >
    </>
  );
}

export default ConsultaDisciplina;