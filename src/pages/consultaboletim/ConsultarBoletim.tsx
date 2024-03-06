import { useState } from 'react'
import { boletim } from '@/mocks/boletim'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';


const ConsultarBoletim = () => {

    const [sem, setSem] = useState("2023/1");

    const changeSem = (e: any) => {
        setSem(e.target.value);
    }
    const dados = boletim;
    const semestres = Object.keys(dados);

    return (
        <main className="flex justify-center align-center">
            <section className="my-24">

                <div className='flex justify-between'>
                    <select className='p-2' name="semestres" id="semestre" onChange={changeSem}>
                        {semestres.map((semestre) => (
                            <option value={semestre} key={semestre}>{semestre}</option>
                        ))}
                    </select>
                    <a href="/"><Button>Voltar</Button></a>
                </div>
                <Table className="min-w-full border mt-4">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="border"> Componente Currícular</TableHead>
                            <TableHead className="border"> CH</TableHead>
                            <TableHead className="border"> Turma</TableHead>
                            <TableHead className="border"> T.Faltas</TableHead>
                            <TableHead className="border"> M.Final</TableHead>
                            <TableHead className="border"> A1</TableHead>
                            <TableHead className="border"> F</TableHead>
                            <TableHead className="border"> A2</TableHead>
                            <TableHead className="border"> F</TableHead>
                            <TableHead className="border"> A3</TableHead>
                            <TableHead className="border"> F</TableHead>
                            <TableHead className="border"> MF</TableHead>
                            <TableHead className="border"> Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {dados[sem as keyof typeof dados].map((disciplina: any) => (
                            <TableRow key={disciplina.id} className={disciplina.situacao === 'Aprovado' ? 'bg-green-100' : 'bg-red-100'}>
                                <TableCell className="border">{disciplina.nome}</TableCell >
                                <TableCell className="border">{disciplina.ch}</TableCell >
                                <TableCell className="border">{disciplina.turma}</TableCell >
                                <TableCell className="border">{disciplina.total_faltas}</TableCell >
                                <TableCell className="border">{disciplina.media_final}</TableCell >
                                <TableCell className="border">{disciplina.a1}</TableCell >
                                <TableCell className="border">{disciplina.f1}</TableCell >
                                <TableCell className="border">{disciplina.a2}</TableCell >
                                <TableCell className="border">{disciplina.f2}</TableCell >
                                <TableCell className="border">{disciplina.a3}</TableCell >
                                <TableCell className="border">{disciplina.f3}</TableCell >
                                <TableCell className="border">{disciplina.mf}</TableCell >
                                <TableCell className="border">{disciplina.situacao}</TableCell >
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </main>
    )
}

export default ConsultarBoletim