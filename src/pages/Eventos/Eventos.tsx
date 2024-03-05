import { useState } from 'react';
import { eventos } from 'src/pages/Eventos/Eventos.ts';

function ListarEventos() {
  const [eventosState, setEventosState] = useState(eventos);
  const [inscricoes, setInscricoes] = useState([]);

  const handleInscricao = (eventoId, prazoInscricao) => {
    const dataAtual = new Date();
    
    if (dataAtual > prazoInscricao) {
      alert('O prazo foi ultrapassado!');
      return;
    }

    const eventoIndex = eventosState.findIndex(evento => evento.id === eventoId);
    const evento = eventosState[eventoIndex];

    if (inscricoes.includes(eventoId)) {
      setInscricoes(inscricoes.filter(id => id !== eventoId));
      setEventosState([
        ...eventosState.slice(0, eventoIndex),
        { ...evento, vagas: evento.vagas + 1 },
        ...eventosState.slice(eventoIndex + 1)
      ]);
    } else {
      if (evento.vagas > 0) {
        setInscricoes([...inscricoes, eventoId]);
        setEventosState([
          ...eventosState.slice(0, eventoIndex),
          { ...evento, vagas: evento.vagas - 1 },
          ...eventosState.slice(eventoIndex + 1)
        ]);
      } else {
        alert('Não há vagas disponíveis!');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">Eventos disponíveis</h1>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"><a href="/">Voltar</a></button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {eventosState.map(evento => (
          <div key={evento.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{evento.nome}</h2>
            <p className="text-gray-600 mb-2">Data: {evento.data}</p>
            <p className="text-gray-600 mb-4">{evento.descricao}</p>
            <p className="text-gray-600">Vagas disponíveis: {evento.vagas}</p>
            {inscricoes.includes(evento.id) ? (
              <button
                onClick={() => handleInscricao(evento.id, evento.prazoInscricao)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                Cancelar Inscrição
              </button>
            ) : (
              <button
                onClick={() => handleInscricao(evento.id, evento.prazoInscricao)}
                className={`mt-4 px-4 py-2 bg-black text-white rounded-md ${new Date() > evento.prazoInscricao ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 transition duration-300'}`}
                disabled={new Date() > evento.prazoInscricao || evento.vagas === 0}
              >
                {new Date() > evento.prazoInscricao ? 'Prazo Encerrado' : 'Inscrever-se'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListarEventos;