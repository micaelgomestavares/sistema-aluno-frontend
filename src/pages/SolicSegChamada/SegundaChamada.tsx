import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { Badge } from "@/components/ui/badge";

function SegundaChamada() {

    return (
        <main className="flex justify-center align-center">
            <Toaster richColors />
            <section className="my-24">
                <div className="flex justify-between">
                    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Solicitação - 2° Chamada</h1>
                    <a href="/"><Button>Voltar</Button></a>
                </div>
                <div className="flex flex-col w-[600px]">
                    <div className="flex items-center mt-3">
                        <span>Aluno:</span>
                        <Input type="text" placeholder="Nome completo" className='ml-2' />
                    </div>
                    <div className="flex items-center mt-3">
                        <span>Data:</span>
                        <Input type="text" placeholder="Data em que foi realizada a prova" className='ml-2' />

                    </div>
                    <div className="flex items-center mt-3">
                        <span>Motivo do Requerimento:</span>
                        <Textarea placeholder="Razão pela qual não pode comparecer." className='w-full ml-2' />
                    </div>
                    <div className="flex items-center mt-3">
                        <span>Documentação necessária:</span>
                        <Input type="file" className='ml-2' />
                    </div>
                    <div className="flex items-center mt-3">
                        <Badge variant={'destructive'}>Aviso</Badge>
                        <span className="ml-2">A solicitação só poderá ser aceita se não ultrapassar o prazo de 72 horas desde a realização da prova.</span>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <Button variant={"success"} className="mr-4" onClick={() => toast.success('Solicitação enviada!')}>
                            Enviar solicitação
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SegundaChamada;

