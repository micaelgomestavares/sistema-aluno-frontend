import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster, toast } from 'sonner';
import { Checkbox } from "@/components/ui/checkbox";
import { cursos } from "../../mocks/cursos";
import { materiasMatriculadas } from "@/mocks/materiasMatriculadas";

const Cursos = () => {
  return (
    <main className="flex justify-center align-center">
      <section className="my-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Semestre atual:</h1>
      <div className="my-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">2024/1</h1>
      </div>
      
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Disciplinas matriculadas:</h1>
          <div className="my-6">
            <Card className="w-[350px] h-[180px]">
              <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                {/* Checkbox para cada disciplina */}
                {materiasMatriculadas.materiasM.map((materiasM) => (
                  <div key={materiasM.id} className="flex items-center space-x-2 mt-2">
                    <Checkbox id={`disciplina-${materiasM.id}`} disabled/>
                    <label htmlFor={`disciplina-${materiasM.id}`} className="text-sm font-medium leading-none">
                      {materiasM.nome}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
      
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Cursos disponíveis:</h1>

        {cursos.cursos.map((curso) => (
          <div key={curso.id} className="my-6">
            <Card className="w-[350px] h-[180px]">
              <CardHeader>
                <CardTitle>{curso.nome}</CardTitle>
                <CardDescription>Escolha suas disciplinas!</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Checkbox para cada disciplina */}
                {curso.disciplinas.map((disciplina) => (
                  <div key={disciplina.id} className="flex items-center space-x-2 mt-2">
                    <Checkbox id={`disciplina-${disciplina.id}`} />
                    <label htmlFor={`disciplina-${disciplina.id}`} className="text-sm font-medium leading-none">
                      {disciplina.nome}
                    </label>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}

    <div>
      <Toaster richColors/>
      <Button className="mr-4" onClick={() => toast.success('Matricula atualizada com sucesso!')}>
        Atualizar matricula
      </Button>
      <Button onClick={() => toast.error('Atualização de matricula cancelada!')}>
        Cancelar
      </Button>
    </div>      

      </section>
    </main>
  );
};

export default Cursos;
