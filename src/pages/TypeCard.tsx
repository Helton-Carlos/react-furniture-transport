import { useState } from "react";
import GoBack from "../components/goBack";

function TypeCard() {
  const [cards] = useState([
    {
      title: 'Envio comercial',
      description: 'Transporte de mercadorias e produtos em geral por caminhão.',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'comercial'
    },
    {
      title: 'Mudanças',
      description: 'Serviço de mudança residencial ou comercial utilizando caminhões apropriados.',
      image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'mudanca'
    },
    {
      title: 'Envio de Produto',
      description: 'Transporte especializado para cargas frágeis ou de alto valor.',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      type: 'produtos'
    }
  ]);

  function escolherTipo(type: string) {
    localStorage.setItem('tipoEnvioSelecionado', type);
  }

  return (
    <>
      <GoBack />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <p className="bg-accent px-4 py-2 text-3xl font-bold my-8 rounded">Tipos de Envio</p>

        <div className="flex flex-wrap justify-center gap-8">
          {cards.map(({ title, description, image, type }, i) => (
            <div key={i} className="card bg-base-100 image-full w-96 shadow-sm">
              <figure>
                <img src={image} alt={title} className="object-cover h-56 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                  <button className="btn-primary" onClick={() => escolherTipo(type)}>
                    Avançar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default TypeCard;
