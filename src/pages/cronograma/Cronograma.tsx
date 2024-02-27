import { useLocation } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Cronograma = () => {
    let { state } = useLocation();
    const cardInfo = state?.cardInfo;

    console.log(cardInfo.cronograma);

    return (
        <div className="my-6">
            {cardInfo && (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">{cardInfo.titulo}</h1>
                    <p>Professor: {cardInfo.professor}</p>
                    <br></br>
                </div>
            )}
            <section className="flex justify-center align-center mt-5">
                <div className="flex flex-col justify-center align-center w-[54rem]">
                    {cardInfo && cardInfo.cronograma.map((cronograma: { data: any; conteudo: any; resumo: any }, index: any) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value={cronograma.conteudo}>
                                <AccordionTrigger className="font-bold">{cronograma.conteudo} - {cronograma.data}</AccordionTrigger>
                                <AccordionContent>
                                    {cronograma.resumo}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Cronograma;
