import { useState } from 'react';
import { trabalhos } from 'src/pages/SubmeterTrabalho_DetalharProva/Trabalhos.ts';
import { provas } from 'src/pages/SubmeterTrabalho_DetalharProva/Provas.ts';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CursoFilter = ({ cursoSelecionado, setCursoSelecionado }: any) => {
  const cursos = [...new Set(trabalhos.map(trabalho => trabalho.disciplina))];

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

  const getSituacaoBadge = (situacao: any) => {
    if (situacao === "enviado") {
      return <Badge className='max-w-[85px]' variant="concluded">Feito</Badge>;
    } else if (situacao === "") {
      return <Badge variant={'destructive'} className='max-w-[85px]'>Pendente</Badge>;
    }
  };

  const getItemTrabalho = (trabalho: any) => {
    return (
      <Card key={trabalho.id} className="w-[350px]">
        <CardHeader>
          <CardTitle className='mb-[3px]'>{trabalho.titulo}</CardTitle>
          <div>
            {getSituacaoBadge(trabalho.situacao)}
            <Badge className='ml-2'>{trabalho.dataEntrega.toLocaleDateString('pt-BR')}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p>{trabalho.descricao}</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link
            to='/submetertrabalho'
            state={{ cardInfo: trabalho }}><Button> Acessar</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  };

  const getItemProva = (prova: any) => {
    return (
      <Card key={prova.id} className="w-[350px]">
        <CardHeader>
          <CardTitle className='mb-[3px]'>{prova.titulo} - {prova.disciplina}</CardTitle>
          <Badge className='max-w-[85px]'>{prova.data.toLocaleDateString('pt-BR')}</Badge>
        </CardHeader>
        <CardContent className="flex flex-col">
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link
            to='/detalharprova'
            state={{ cardInfo: prova }}><Button> Acessar</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  };

  let trabalhosFiltrados; // Definindo a variável

  switch (filtroStatus) {
    case "concluido":
      trabalhosFiltrados = disciplinasPesquisadas.filter(trabalho => trabalho.situacao === "enviado");
      break;
    case "emaberto":
      trabalhosFiltrados = disciplinasPesquisadas.filter(trabalho => trabalho.situacao === "");
      break;
    default:
      trabalhosFiltrados = disciplinasPesquisadas;
  }

  let items;
  switch (tipoExibicao) {
    case "trabalhos":
      items = trabalhosFiltrados.map(getItemTrabalho);
      break;
    case "provas":
      items = provinhas.map(getItemProva);
      break;
    case "todos":
      items = (
        <>
          {trabalhosFiltrados.map(getItemTrabalho)}
          {provinhas.map(getItemProva)}
        </>
      );
      break;
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

            <select className='ml-4' value={tipoExibicao} onChange={handleChangeTipoExibicao}>
              <option value="todos">Todos</option>
              <option value="trabalhos">Trabalhos</option>
              <option value="provas">Provas</option>
            </select>
          </div>

          <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Trabalhos e Provas: </h1>

          <select className='mt-4' value={filtroStatus} onChange={handleChangeFiltroStatus}>
            <option value="todos">Todos</option>
            <option value="concluido">Enviado</option>
            <option value="emaberto">Pendente</option>
          </select>

          <div className="grid grid-cols-4 gap-4 my-6">
            {items}
          </div>
        </section>
      </main>
    </>
  );
}
export default ConsultaProvaTraba;
