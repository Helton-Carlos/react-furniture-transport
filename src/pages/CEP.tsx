import { useNavigate } from "react-router-dom";
import GoBack from "../components/goBack";
import { FaMapMarkerAlt, FaFlagCheckered } from 'react-icons/fa';

function CEP() {
  const navigate = useNavigate();

  function addCep() {
    const cep = (document.getElementById('cepInput') as HTMLInputElement).value;
    localStorage.setItem('cep', cep);
    navigate('/tipo-envio');
  }
  return (
    <>
      <GoBack />

      <div className="mt-10 flex flex-col items-center">
        <p className="bg-accent px-4 py-2 text-3xl font-bold my-8 rounded">Adicione o CEP</p>

        <div className="flex items-center gap-8 mt-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-600 text-white p-3 shadow-md">
                <FaMapMarkerAlt className="text-lg" />
              </div>

              <input
                type="text"
                placeholder="Digite o CEP de partida"
                className="input-primary"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full bg-red-600 text-white p-3 shadow-md">
                <FaFlagCheckered className="text-lg" />
              </div>

              <input
                type="text"
                placeholder="Digite o CEP de chegada"
                className="input-primary"
              />
            </div>
          </div>

          <div>
            <button className="btn-primary" onClick={() => addCep()}>
              Avançar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CEP;
