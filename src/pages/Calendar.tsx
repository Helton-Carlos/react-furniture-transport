import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import { useNavigate } from "react-router-dom";
import "react-day-picker/style.css";

import type { DateRange } from "react-day-picker";

function Calendar() {
  const [range, setRange] = useState<DateRange | undefined>();
  const navigate = useNavigate();

  function submitForm(e: React.FormEvent) {
    e.preventDefault();

    const dataFrom = range?.from ? new Date(range.from) : null;
    const dataTo = range?.to ? new Date(range.to) : null;

    localStorage.setItem('dataFrom', dataFrom?.toISOString() || '');
    localStorage.setItem('dataTo', dataTo?.toISOString() || '');

    navigate('/tipo-envio');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="bg-accent px-4 py-2 text-3xl font-bold my-8">
        Transporte de Móveis
      </p>

      <form onSubmit={submitForm}>
        <div>
          <p className="font-bold text-3xl mb-4">
            Selecione o intervalo de datas:
          </p>

          <div className="flex items-center gap-10">
            <DayPicker
              mode="range"
              locale={ptBR}
              selected={range}
              onSelect={setRange}
            />

            {range?.from && range?.to && (
              <div>
                <p className="bg-yellow-300 font-bold text-3xl mb-4">
                  De: {range.from.toLocaleDateString()}
                </p>
                <p className="bg-blue-400 font-bold text-3xl mb-4">
                  Até: {range.to.toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="btn-primary"
          >
            Próximo passo
          </button>
        </div>
      </form>
    </div>
  );
}

export default Calendar;
