import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';
import { horariosSemana } from 'src/mocks/horarios';

interface Disciplina {
    id: number;
    nome: string;
    professor: string;
    carga_horaria: number;
    dias: string[];
    horario: string[];
    sala: string;
    prova?: boolean;
}

const ConsultaHorario: React.FC = () => {
    const semana: string[] = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    const horarios: string[] = ['18:20', '19:10', '20:10', '21:00', '21:50'];

    const mockData = horariosSemana;

    const renderDisciplina = (dia: string, horario: string) => {
        const disciplinas: Disciplina[] = mockData.semestres["2023/1"];
        const disciplina = disciplinas.find(disciplina =>
            disciplina.dias.includes(dia) && disciplina.horario.includes(horario)
        );

        if (disciplina) {
            return (
                <>
                    <p className="text-sm">{disciplina.nome}</p>
                    <p className="text-xs">{disciplina.professor}</p>
                    <p className="text-xs">{disciplina.sala}</p>
                    {disciplina.prova && <Badge variant={'trabalho'} className="w-[70px]">Prova P1</Badge>}
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <main className="flex justify-center align-center">
            <section className="my-24">
                <div className="flex justify-between">
                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Horários da semana</h1>
                    <a href="/"><Button>Voltar</Button></a>
                </div>
                <table className='table-auto my-6'>
                    <thead>
                        <tr>
                            <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">Horário</th>
                            {semana.map(dia => (
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs" key={dia}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {horarios.map((horario) => (
                            <tr key={horario}>
                                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">{horario}</th>
                                {semana.map((dia) => (
                                    <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300" key={dia}>
                                        {renderDisciplina(dia, horario)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default ConsultaHorario;
