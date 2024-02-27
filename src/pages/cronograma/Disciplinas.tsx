import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { alunosData } from "../../mocks/aluno.ts";
import { Link } from "react-router-dom";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const Disciplinas = () => {

    const cards = alunosData.alunos.flatMap((aluno: { disciplinas_inscritas: any[]; }) => {
        return aluno.disciplinas_inscritas.map((disciplina: { id: any; nome: any; professor: any; cronograma: any; }) => {
            return {
                id: disciplina.id,
                titulo: disciplina.nome,
                professor: disciplina.professor,
                cronograma: disciplina.cronograma
            };
        });
    });

    return (
        <main className="flex justify-center align-center">
            <section className="my-24">
                <div className="flex justify-between">
                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Cronograma das disciplinas</h1>
                    <a href="/"><Button>Voltar</Button></a>
                </div>
                <div className="grid grid-cols-4 gap-4 my-6">
                    {cards.map((card: any, index: any) => (
                        <Card className="w-[350px]" key={index}>
                            <CardHeader>
                                <CardTitle>{card.titulo}</CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent>
                                Acesse o cronograma para acompanhar o conteúdo das aulas da disciplina.
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Link
                                    to='/cronograma'
                                    state={{ cardInfo: card }}><Button> Acessar</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Disciplinas;