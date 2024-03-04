import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chats = () => {

    return (



        <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4"> 

            <div className="flex justify-between ml-[950px]">
                <a href="/"><Button>Voltar</Button></a>
            </div>

            <section className="z-10 max-w-5xl w-full h-full text-sm lg:flex rounded-lg border-2 bg-card text-card-foreground shadow-sm p-2 mt-2">

                { /* LISTA DE CHATS */}
                <div className="flex flex-col w-[400px] h-full p-2">
                    <h1 className="flex justify-between p-2 items-center scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">Chats</h1>

                    <div className="mt-6">
                        <div className="flex space-x-4 cursor-pointer hover:bg-gray-100 p-4">
                            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex justify-center items-center">
                                <img className="h-12 w-12 rounded-full" src="https://shadcn-chat.vercel.app/User1.png" />
                            </span>
                            <div>
                                <h1 className="font-medium">Fernando carvalho</h1>
                                <p className="text-xs text-muted-foreground">Gerência de Projetos</p>
                            </div>
                        </div>

                        <div className="flex space-x-4 cursor-pointer hover:bg-gray-100 p-4">
                            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex justify-center items-center">
                                <img className="h-12 w-12 rounded-full" src="https://shadcn-chat.vercel.app/User1.png" />
                            </span>
                            <div>
                                <h1 className="font-medium">Renata carvalho</h1>
                                <p className="text-xs text-muted-foreground">Programação OO</p>
                            </div>
                        </div>

                    </div>
                </div>

                { /* MENSAGENS */}
                <div className="flex flex-col justify-between w-full h-full border-l">

                    { /* NOME DA PESSOA E HORÁRIO ONLINE */}
                    <div className="w-full h-20 flex p-4 justify-between items-center border-b-2">
                        <div className="flex items-center gap-2">
                            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex justify-center items-center">
                                <img className="aspect-square w-10 h-10" alt="Jane Doe" width="6" height="6" src="https://shadcn-chat.vercel.app/User1.png" />
                            </span>
                            <div className="flex flex-col"><span className="font-medium">Fernando Carvalho</span><span className="text-xs">Online 2 minutos atrás.</span>
                            </div>
                        </div>
                    </div>

                    { /* TROCA DE MENSAGENS */}
                    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
                        <div className="flex flex-col gap-2 p-4 whitespace-pre-wrap items-end">
                            <div className="flex gap-3 items-center">
                                <span className="bg-blue-600 text-white p-3 rounded-md max-w-xs">Oi, professor! Tudo certo? Posso enviar o trabalho 1 dia atrasado?</span>
                                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex justify-center items-center">
                                    <img className="aspect-square h-full w-full" alt="Jakob Hoeg" width="6" height="6" src="https://shadcn-chat.vercel.app/User1.png" />
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 p-4 whitespace-pre-wrap items-start">
                            <div className="flex gap-3 items-center">
                                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full flex justify-center items-center">
                                    <img className="aspect-square h-full w-full" alt="Jakob Hoeg" width="6" height="6" src="https://shadcn-chat.vercel.app/User1.png" />
                                </span>
                                <span className="bg-accent p-3 rounded-md max-w-xs">Olá, Micael! Pode sim, tudo certo.</span>
                            </div>
                        </div>
                    </div>

                    { /* INPUT ENVIAR MENSAGEM */}
                    <div className="p-2 flex justify-between w-full items-center gap-2">
                        <div className="flex">
                            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R5lunla:" data-state="closed" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus-circle text-muted-foreground"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                            </a>
                            <div className="flex">
                                <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-image text-muted-foreground"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="13" r="2"></circle><path d="m20 17-1.1-1.1a2 2 0 0 0-2.81.01L10 22"></path></svg>
                                </a>
                                <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent/30 hover:text-accent-foreground h-9 w-9 dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paperclip text-muted-foreground"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                                </a>
                            </div>
                        </div>
                        <Input type="text" className="w-full h-12 p-4 border rounded-lg" placeholder="Digite uma mensagem" />
                    </div>

                </div>

            </section>
        </main>
    );
}

export default Chats;
