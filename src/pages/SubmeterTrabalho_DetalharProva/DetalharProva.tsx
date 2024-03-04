import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { provas } from 'src/pages/SubmeterTrabalho_DetalharProva/Provas.ts';

function DetalharProva() {
  const provaId = 2; // FAZER A LIGAÇÃO COM A PAGINA DE CONSULTA DE PROVAS
  const prova = provas.find(p => p.id === provaId);

  return (
    <main className="flex justify-center align-center">
      <section className="my-24">
        <div>
          {prova && (
            <Card>
              <CardHeader className="flex items-left">
                <div className="flex justify-between mb-10">
                  <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Detalhes da Prova</h1>
                  <a href="/"><Button>Voltar</Button></a>
                </div>
                <div className="w-full">
                  <CardTitle className="text-center mb-5 text-4xl font-bold leading-relaxed">{prova.titulo}</CardTitle>
                </div>
                <div className="mt-1">
                  <Badge variant="secondary" className="bg-blue-500 text-lg text-white cursor-default hover:bg-blue-700">{prova.disciplina}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div><Badge variant="secondary" className={'text-md mb-6 bg-gray-200 text-gray-800'}>
                  Data: {prova.data.toLocaleString('pt-BR')}
                </Badge>
                </div>
                <div><Badge variant="secondary" className={'text-md mb-10 bg-gray-200 text-gray-800'}>
                  Local: {prova.sala}
                </Badge>
                </div>
                <div className="bg-gray-100 p-4">
                  <div >
                    <CardTitle className="text-center mb-8">Conteúdo:</CardTitle>
                  </div>
                  <div >
                    <ol className="text-md list-decimal pl-5 w-full">
                      {prova.conteudo.map(conteudo => (
                        <li className='mb-6'>
                          {conteudo.topico} :
                          <ul className={'text-md list-disc pl-5'}>
                            {conteudo.assuntos.split('/').map((item) => (
                              <li >{item}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent >
            </Card>
          )}
        </div>
      </section>
    </main>
  );

}

export default DetalharProva;