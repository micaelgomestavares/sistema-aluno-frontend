import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import classNames from 'classnames';
import { format } from "date-fns";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { trabalhos } from 'src/pages/SubmeterTrabalho_DetalharProva/Trabalhos.ts';

function SubmeterTrabalho() {
  let { state } = useLocation();
  const cardInfo = state?.cardInfo;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const [trabalhosState, setTrabalhosState] = useState(trabalhos);
  const trabalhoId = cardInfo.id; // FAZER A LIGAÇÃO COM A PAGINA DE CONSULTA DE PROVAS
  const trabalho = trabalhosState.find((t) => t.id === trabalhoId);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile == null) {
      window.alert("Por favor, insira o seu arquivo!");
      return;
    }

    const updatedTrabalhos = [...trabalhosState];
    const index = updatedTrabalhos.findIndex((t) => t.id === trabalhoId);
    updatedTrabalhos[index].situacao = "enviado";
    updatedTrabalhos[index].dataEnvio = new Date();
    setTrabalhosState(updatedTrabalhos);
    setSubmissionMessage(`O trabalho foi enviado no dia ${format(new Date(), "dd/MM/yyyy")}`);
    setSubmitButtonDisabled(true);
    window.alert("Arquivo enviado com sucesso!");
  };

  const badgeClasses = classNames(
    "text-sm mb-10 bg-gray-200",
    {
      "text-red-500": format(trabalho?.dataEntrega ?? "", "yyyy-MM-dd") < format(new Date(), "yyyy-MM-dd"),
      "text-green-500": trabalho?.situacao === "enviado",
      "text-gray-800":
        trabalho?.situacao !== "enviado" &&
        format(trabalho?.dataEntrega ?? "", "yyyy-MM-dd") >= format(new Date(), "yyyy-MM-dd"),
    }
  );

  return (
    <main className="flex justify-center align-center">
      <section className="my-24">
        <div>
          {trabalho && (
            <Card className="p-4">
              <CardHeader className="flex items-left">
                <div className="flex justify-between mb-10">
                  <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl'>Submeter Trabalho</h1>
                  <a href="/consultar"><Button>Voltar</Button></a>
                </div>
                <div className="w-full">
                  <CardTitle className="text-center mb-5 text-4xl font-bold leading-relaxed">{trabalho.titulo}</CardTitle>
                </div>
                <div className="mt-1">
                  <Badge variant="secondary" className="text-lg">{trabalho.disciplina}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className={badgeClasses}>
                  Data de Entrega: {trabalho.dataEntrega.toLocaleString('pt-BR')}
                </Badge>
                <p>{trabalho.descricao}</p>
              </CardContent >
              <form onSubmit={handleSubmit}>
                <Input type="file" className="mb-10" onChange={handleFileChange} />
                <div className="flex justify-center">
                  {trabalho.situacao !== 'enviado' && format(trabalho.dataEntrega, "yyyy-MM-dd") >= format(new Date(), "yyyy-MM-dd") ? (
                    <Button type="submit" disabled={submitButtonDisabled}>
                      {submitButtonDisabled ? submissionMessage : "Enviar Trabalho"}
                    </Button>
                  ) : trabalho.situacao !== 'enviado' && format(trabalho.dataEntrega, "yyyy-MM-dd") < format(new Date(), "yyyy-MM-dd") ? (
                    <p key="atrasado" className="text-red-500">Trabalho atrasado!</p>
                  ) : (
                    <p key="enviado" className="text-green-500">{`O trabalho foi enviado no dia ${format(trabalho.dataEnvio ?? "", "dd/MM/yyyy")}`}</p>
                  )}
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}

export default SubmeterTrabalho;