import React, { useState } from 'react';
import { provas } from 'src/pages/SubmeterTrabalho_DetalharProva/Provas.ts';
import { trabalhos } from 'src/pages/SubmeterTrabalho_DetalharProva/Trabalhos.ts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';

const CursoFilter = ({ cursoSelecionado, setCursoSelecionado }: any) => {
  const cursos = [...new Set(trabalhos.map(trabalhos => trabalhos.disciplina))];

  const handleChangeCurso = (event: any) => {
    setCursoSelecionado(event.target.value);
  };

  return (
    <select value={cursoSelecionado} onChange={handleChangeCurso}>
      <option value="">Todas as disciplinas</option>
      {cursos.map(curso => (
        <option key={curso} value={curso}>
          {curso}
        </option>
      ))}
    </select>
  );
}; 
  
function ConsultaProvaTraba() {

  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  const [tipoExibicao, setTipoExibicao] = useState('todos');

  const [filtroStatus, setFiltroStatus] = useState('todos');

  const handleChangeTipoExibicao = (event: any) => {
    setTipoExibicao(event.target.value);
  };

  const handleChangeFiltroStatus = (event: any) => {
    setFiltroStatus(event.target.value);
  };

  const disciplinasCurso = cursoSelecionado
    ? trabalhos.filter(trabalho => trabalho.disciplina === cursoSelecionado)
    : trabalhos;

  const disciplinasCurso2 = cursoSelecionado
    ? provas.filter(prova => prova.disciplina === cursoSelecionado)
    : provas;

  const disciplinasPesquisadas = pesquisa
    ? disciplinasCurso.filter(trabalho => trabalho.disciplina.toLowerCase().includes(pesquisa.toLowerCase()))
    : disciplinasCurso;

  const provinhas = pesquisa
    ? disciplinasCurso2.filter(prova => prova.disciplina.toLowerCase().includes(pesquisa.toLowerCase()))
    : disciplinasCurso2;


    let trabalhosFiltrados;
    if (filtroStatus === 'concluido') {
      trabalhosFiltrados = disciplinasPesquisadas.filter(trabalho => trabalho.situacao === 'enviado');
    } else if (filtroStatus === 'emaberto') {
      trabalhosFiltrados = disciplinasPesquisadas.filter(trabalho => trabalho.situacao === '');
    } else { // Caso seja 'todos' ou qualquer outra coisa, exibe todos os trabalhos
      trabalhosFiltrados = disciplinasPesquisadas;
    }



  let items;
  if (tipoExibicao === 'trabalhos') {

    {items = trabalhosFiltrados.map(trabalhos => (
      <Card key={trabalhos.id} className="w-[350px]">
         <CardHeader>
                  <CardTitle className='mb-[3px]'>{trabalhos.titulo}</CardTitle>
                  {trabalhos.situacao === 'enviado' && <Badge className="max-w-[85px]" variant={'concluded'}>{trabalhos.dataEntrega.toLocaleDateString('pt-BR')}</Badge>}
                  {trabalhos.situacao === 'enviado' && <Badge className="max-w-[85px]" variant={'concluded'}>Feito</Badge>}
                  {trabalhos.situacao === '' && <Badge className="max-w-[85px]">{trabalhos.dataEntrega.toLocaleDateString('pt-BR')}</Badge>}
                  {trabalhos.situacao === '' && <Badge className="max-w-[85px]">Pendente</Badge>}
                </CardHeader>
      </Card>
    ))};
  } else if (tipoExibicao === 'provas') {
    {items = provinhas.map(provas => (
      <Card key={provas.id} className="w-[350px]">
        <CardHeader>
                  <CardTitle className='mb-[3px]'>{provas.titulo} - {provas.disciplina}</CardTitle>
                  <Badge className="max-w-[85px]">{provas.data.toLocaleDateString('pt-BR')}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col">
                </CardContent>
      </Card>
    ))};
  } else {
    items = (
      <>
        {trabalhosFiltrados.map(trabalhos => (
          <Card key={trabalhos.id} className="w-[350px]">
            <CardHeader>
                  <CardTitle className='mb-[3px]'>{trabalhos.titulo}</CardTitle>
                  {trabalhos.situacao === 'enviado' && <Badge className="max-w-[85px]" variant={'concluded'}>{trabalhos.dataEntrega.toLocaleDateString('pt-BR')}</Badge>}
                  {trabalhos.situacao === 'enviado' && <Badge className="max-w-[85px]" variant={'concluded'}>Feito</Badge>}
                  {trabalhos.situacao === '' && <Badge className="max-w-[85px]">{trabalhos.dataEntrega.toLocaleDateString('pt-BR')}</Badge>}
                  {trabalhos.situacao === '' && <Badge className="max-w-[85px]">Pendente</Badge>}
                </CardHeader>
          </Card>
        ))}
        {provinhas.map(provas => (
          <Card key={provas.id} className="w-[350px]">
            <CardHeader>
                  <CardTitle className='mb-[3px]'>{provas.titulo} - {provas.disciplina}</CardTitle>
                  <Badge className="max-w-[85px]">{provas.data.toLocaleDateString('pt-BR')}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col">
                </CardContent>
          </Card>
        ))}
      </>
    );
  }

  return (
    <>
      <main className="flex justify-center align-center">
        <section className="my-24">
          <div className="flex justify-between">
            <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Consulta de Provas e Trabalhos</h1>
            <a href="/"><Button>Voltar</Button></a>
          </div>
          <Input type="text" placeholder="Pesquisar disciplina" className='mt-3' value={pesquisa} onChange={(event) => setPesquisa(event.target.value)} />
          <div className="my-3">
            <CursoFilter cursoSelecionado={cursoSelecionado} setCursoSelecionado={setCursoSelecionado} />

            <select value={tipoExibicao} onChange={handleChangeTipoExibicao}>
            <option value="todos">Todos</option>
            <option value="trabalhos">Trabalhos</option>
            <option value="provas">Provas</option>
          </select>
          </div>
          
          <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Trabalhos e Provas: </h1>

              <select value={filtroStatus} onChange={handleChangeFiltroStatus}>
              <option value="todos">Todos</option>
              <option value="concluido">Enviado</option>
              <option value="emaberto">Pendente</option>
            </select>
        
          <div className="grid grid-cols-4 gap-4 my-6">
            {items}
          </div>
        </section>
      </main >
    </>
  );
}

export default ConsultaProvaTraba;
