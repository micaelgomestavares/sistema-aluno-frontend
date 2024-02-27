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
        <div className="grid grid-cols-4 gap-4 my-6">

            {cards.map((card: { titulo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                <Card key={index}>
                    <CardHeader>
                        <CardTitle>{card.titulo}</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        Acesse o cronograma para acompanhar o conteúdo das aulas da disciplina.
                    </CardContent>
                    <CardFooter>
                        <Link
                            to='/cronograma'
                            state={{ cardInfo: card }}><Button> Acessar</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}

        </div >
    );
};

export default Disciplinas;