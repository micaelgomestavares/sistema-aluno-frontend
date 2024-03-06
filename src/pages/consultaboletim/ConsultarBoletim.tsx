import React, { useState } from 'react'

import { boletim } from '@/mocks/boletim'

const ConsultarBoletim = () => {

    const [sem, setSem] = useState("2023/1");

    const changeSem = e => {
        setSem(e.target.value);
    }

    const dados = boletim;

    const semestres = Object.keys(dados);
    console.log(semestres);
    return (
        <>
            <select name="semestres" id="semestre" onChange={changeSem}>
                {semestres.map((semestre,index) => (
                    <option value={semestre} key={semestre}>{semestre}</option>    
                ))}
            </select>
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="border"> Componente Currícular</th>
                        <th className="border"> CH</th>
                        <th className="border"> Turma</th>
                        <th className="border"> T.Faltas</th>
                        <th className="border"> M.Final</th>
                        <th className="border"> A1</th>
                        <th className="border"> F</th>
                        <th className="border"> A2</th>
                        <th className="border"> F</th>
                        <th className="border"> A3</th>
                        <th className="border"> F</th>
                        <th className="border"> MF</th>
                        <th className="border"> Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {dados[sem].map((disciplina) => (
                        <tr key={disciplina.id} className={disciplina.situacao === 'Aprovado' ? 'bg-green-100' : 'bg-red-100'}>
                            <td className="border">{disciplina.nome}</td>
                            <td className="border">{disciplina.ch}</td>
                            <td className="border">{disciplina.turma}</td>
                            <td className="border">{disciplina.total_faltas}</td>
                            <td className="border">{disciplina.media_final}</td>
                            <td className="border">{disciplina.a1}</td>
                            <td className="border">{disciplina.f1}</td>
                            <td className="border">{disciplina.a2}</td>
                            <td className="border">{disciplina.f2}</td>
                            <td className="border">{disciplina.a3}</td>
                            <td className="border">{disciplina.f3}</td>
                            <td className="border">{disciplina.mf}</td>
                            <td className="border">{disciplina.situacao}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default ConsultarBoletim