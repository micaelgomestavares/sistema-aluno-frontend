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
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Hello, world!</h1>

        <div className="grid grid-cols-4 gap-4 my-6">
          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Pedidos de Matrícula</CardTitle>
              <CardDescription>Faça sua matrícula aqui.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/">
                <Button>Acessar</Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="w-[350px] h-[180px]">
            <CardHeader>
              <CardTitle>Disciplinas </CardTitle>
              <CardDescription>Faça sua matrícula aqui.</CardDescription>
            </CardHeader>
            <CardContent>
            </CardContent>
            <CardFooter className="flex pt-0 justify-end">
              <a href="/consulta-disciplina">
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
