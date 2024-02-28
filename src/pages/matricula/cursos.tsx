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
import { cursos } from "src/mocks/cursos.ts";
import { materiasMatriculadas } from "@/mocks/materiasMatriculadas.ts";

const Cursos = () => {
  return (
    <main className="flex justify-center align-center">
      <section className="my-24">

        <div className="flex justify-between">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Disciplinas matriculadas:</h1>
          <a href="/"><Button>Voltar</Button></a>
        </div>

        <div className="grid grid-cols-4 gap-4 my-6">
          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Semestre atual: </CardTitle>
              <CardDescription>2024/1</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Checkbox para cada disciplina */}
              {materiasMatriculadas.materiasM.map((materiasM) => (
                <div key={materiasM.id} className="flex items-center space-x-2 mt-1">
                  <Checkbox id={`disciplina-${materiasM.id}`} disabled checked />
                  <label htmlFor={`disciplina-${materiasM.id}`} className="text-sm font-medium leading-none">
                    {materiasM.nome}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Cursos disponíveis:</h1>
        <div className="grid grid-cols-4 gap-4 my-6">
          {cursos.cursos.map((curso) => (
            <Card key={curso.id} className="w-[350px]">
              <CardHeader>
                <CardTitle>{curso.nome}</CardTitle>
                <CardDescription>Escolha suas disciplinas!</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Checkbox para cada disciplina */}
                {curso.disciplinas.map((disciplina) => (
                  <div key={disciplina.id} className="flex items-top flex space-x-2 mt-2">
                    <Checkbox id={`disciplina-${disciplina.id}`} />
                    <div className="grid gap-1 leading-none">
                      <label htmlFor={`disciplina-${disciplina.id}`} className="text-sm font-medium leading-none">
                        {disciplina.nome}
                      </label>
                      <p className="text-sm text-muted-foreground">
                        {disciplina.professor} -  {disciplina.dias} - {
                          disciplina.horario.length > 1
                            ? `[${disciplina.horario[0]}-${disciplina.horario[disciplina.horario.length - 1]}]`
                            : disciplina.horario[0]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Toaster richColors />
        <div className="flex justify-between">
          <Button variant={"destructive"} onClick={() => toast.error('Atualização de matricula cancelada!')}>
            Cancelar
          </Button>
          <Button variant={"success"} className="mr-4" onClick={() => toast.success('Matricula atualizada com sucesso!')}>
            Atualizar matricula
          </Button>
        </div>

      </section>
    </main>
  );
};

export default Cursos;
