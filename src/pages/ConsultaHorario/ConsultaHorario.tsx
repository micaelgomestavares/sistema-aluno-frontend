import React from 'react'
import mock from '/home/marcelo/Desktop/gerencia-de-projetos/sistema-aluno-frontend/src/mocks/aluno.json'
import mockSi from '/home/marcelo/Desktop/gerencia-de-projetos/sistema-aluno-frontend/src/mocks/si.json'


const ConsultaHorario: React.FC = () => {
    let sala: string;
    const semana: string[] = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    interface Aluno {
        nome: string;
        curso: string;
        materias: string[];

    }

    /**
     * Variável utilizada por causa da natureza do mock
     * Primeira array corresponde aos dias e segunda aos horários
     */

    interface DicmateriaHorario {
        [key: string]: string[][];
    }



    let materiaHorario: DicmateriaHorario = {};


    /**
     * Função utilizada para buscar alunos. Futuramente essa será a primeira
     * função chamada na página, baseado no nome ou matrícula do aluno.
     */
    function buscarAluno(nomeAluno: string) {
        return mock.find(item => item.nome === nomeAluno);
    }

    function buscarMateriasHorarios(materia: string) {
        const dados = mockSi.semestres['2023/1'].find(item => item.nome === materia);

        if (dados) {
            let diasHorarios: string[][] = [[]];
            
            diasHorarios[0] = dados?.dias || [];
            diasHorarios[1] = dados?.horario || [];
            sala = dados?.sala;
            materiaHorario[materia] = diasHorarios;
        }
    }

    //Função utilizada para buscar matérias
    function buscarMaterias() {
        const alunoEncontrado = buscarAluno("João");

        //Checa se o aluno fora encontrado, para não haver o problema de undefined
        if (alunoEncontrado) {
            let aluno: Aluno = alunoEncontrado;

            aluno.materias.forEach(buscarMateriasHorarios);
        }
    }

    buscarMaterias();
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Horário</th>
                        {semana.map(dia => (
                            <th key={dia}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</th>
                        ))}

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td>18:20</td>

                        {semana.map(dia => (
                            <td className={dia} key={dia}>
                                {Object.entries(materiaHorario).map(([key, materia]) => (
                                    materia[0].includes(dia) && <span key={dia}>{key} {sala}</span>
                                ))}


                            </td>
                        ))}

                    </tr>
                    <tr>
                        <td>19:10</td>
                        {semana.map(dia => (
                            <td className={dia} key={dia}>
                                {Object.entries(materiaHorario).map(([key, materia]) => (
                                    materia[0].includes(dia) && <span key={dia}>{key} {sala}</span>
                                ))}


                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>20:10</td>
                        {semana.map(dia => (
                            <td className={dia} key={dia}>
                                {Object.entries(materiaHorario).map(([key, materia]) => (
                                    materia[0].includes(dia) && <span key={dia}>{key} {sala}</span>
                                ))}


                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>21:00</td>
                        {semana.map(dia => (
                            <td className={dia} key={dia}>
                                {Object.entries(materiaHorario).map(([key, materia]) => (
                                    materia[0].includes(dia) && <span key={dia}>{key} {sala}</span>
                                ))}


                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>21:50</td>
                        {semana.map(dia => (
                            <td className={dia} key={dia}>
                                {Object.entries(materiaHorario).map(([key, materia]) => (
                                    materia[0].includes(dia) && <span key={dia}>{key} {sala}</span>
                                ))}


                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ConsultaHorario;