import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { useLocation } from "react-router-dom";

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
            <div className="grid grid-cols-4 gap-4">
                {cardInfo && cardInfo.cronograma.map((cronograma: { data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; conteudo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; resumo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
                    <div key={index} className="border rounded p-4">
                        <h2>{cronograma.data}</h2>
                        <br />
                        <p><strong>{cronograma.conteudo}</strong></p>
                        <br />
                        <p>{cronograma.resumo}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cronograma;
