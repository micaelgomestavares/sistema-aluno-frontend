import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Home = () => {
  return (
    <main className="flex justify-center align-center">
      <section className="my-24">
        <div className="flex justify-between items-center justify-content-center">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Olá, aluno! 👋</h1>
          <img className="max-w-[300px]" src="src/assets/logo.svg"></img>
        </div>
        <div className="grid grid-cols-4 gap-4 my-6">

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Pedidos de Matrícula</CardTitle>
              <CardDescription>Faça sua matrícula aqui.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/pedidos-matricula">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Cronograma das disciplinas</CardTitle>
              <CardDescription>Consulte o cronograma da sua matéria.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/disciplinas">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Seus horários</CardTitle>
              <CardDescription>Consulte os seus horários na semana.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/horarios">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Disciplinas </CardTitle>
              <CardDescription>Verifique as suas disciplinas</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/consulta-disciplina">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Mensagens </CardTitle>
              <CardDescription>Verifique as mensagens dos seus professores</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/mensagens">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;
