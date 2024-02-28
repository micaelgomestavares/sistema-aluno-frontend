import { useState } from 'react';
import { mensagens } from 'src/pages/Mensagens/mensagens-mock.ts';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MensagemCard = ({ mensagem }: any) => {
  return (
    <>
      {mensagem.mensagens.map((msg: any, index: any) => (
        <Card key={index} className="w-[350px]">
          <CardHeader>
            <CardTitle className='mb-[3px] flex space-between'>
              {mensagem.professor}
            </CardTitle>
            {msg.situacao === 'trabalho' && <Badge variant={'trabalho'} className="w-[70px]">Trabalho</Badge>}
            {msg.situacao === 'cancelada' && <Badge variant={'destructive'} className="w-[75px]">Cancelada</Badge>}
            <span className="text-sm">{msg.data}</span>
          </CardHeader>
          <CardContent className="flex flex-col">
            {msg.mensagem}
          </CardContent>
        </Card>
      ))}
    </>
  );
};

const CursoFilter = ({ cursoSelecionado, setCursoSelecionado }: any) => {
  const disciplinas = [...new Set(mensagens.map(msg => msg.disciplina))];

  const handleChangeCurso = (event: any) => {
    setCursoSelecionado(event.target.value);
  };

  return (
    <select className="mt-3" value={cursoSelecionado} onChange={handleChangeCurso}>
      <option value="">Todas as disciplinas</option>
      {disciplinas.map(disciplina => (
        <option key={disciplina} value={disciplina}>
          {disciplina}
        </option>
      ))}
    </select>
  );
};

const getMensagensFiltradas = (mensagens: any, cursoSelecionado: any) => {
  if (!cursoSelecionado) {
    return mensagens;
  }
  return mensagens.filter((msg: { disciplina: any; }) => msg.disciplina === cursoSelecionado);
};

const Mensagens = () => {
  const [cursoSelecionado, setCursoSelecionado] = useState('');
  const mensagensFiltradas = getMensagensFiltradas(mensagens, cursoSelecionado);

  return (
    <main className="flex justify-center align-center">
      <section className="my-24">
        <div className="flex justify-between">
          <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Mensagens das Disciplinas</h1>
          <a href="/"><Button>Voltar</Button></a>
        </div>

        <CursoFilter cursoSelecionado={cursoSelecionado} setCursoSelecionado={setCursoSelecionado} />

        <div className="grid grid-cols-4 gap-4 my-6">
          {mensagensFiltradas.map((mensagem: any, index: any) => (
            <MensagemCard key={index} mensagem={mensagem} />
          ))}
        </div>

      </section>
    </main>
  );
};

export default Mensagens;