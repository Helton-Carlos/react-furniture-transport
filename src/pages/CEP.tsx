import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoBack from "../components/goBack";
import { maskCep } from "../utils/maskCEP";
import { FaMapMarkerAlt, FaFlagCheckered } from 'react-icons/fa';

function CEP() {
  const navigate = useNavigate();
  const [cepFrom, setCepFrom] = useState("");
  const [cepTo, setCepTo] = useState("");

  function addCep(e: React.FormEvent) {
    e.preventDefault();

    localStorage.setItem("cepFrom", cepFrom);
    localStorage.setItem("cepTo", cepTo);

    navigate("/tipo-envio");
  }
  return (
    <>
      <GoBack />

      <div className="mt-10 flex flex-col items-center">
        <p className="bg-accent px-4 py-2 text-3xl font-bold my-8 rounded">Adicione o CEP</p>

        <form onSubmit={addCep} className="flex items-center gap-8 mt-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-600 text-white p-3 shadow-md">
                <FaMapMarkerAlt className="text-lg" />
              </div>

              <input
                type="text"
                placeholder="Digite o CEP de partida"
                className="input-primary"
                value={cepFrom}
                onChange={(e) => setCepFrom(maskCep(e.target.value))}
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
                value={cepTo}
                onChange={(e) => setCepTo(maskCep(e.target.value))}
              />
            </div>
          </div>

          <div>
            <button className="btn-primary" type="submit">
              Avançar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CEP;
