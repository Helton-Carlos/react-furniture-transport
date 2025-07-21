
import { FaArrowLeft } from "react-icons/fa";

export default function GoBack() {
  function handleGoBack() {
    window.history.back();
  }

  return (
    <button
      onClick={handleGoBack}
      type="button"
      aria-label="Voltar"
      className="flex items-center m-10 gap-2 text-lg font-bold text-gray-700 cursor-pointer hover:text-gray-300"
    >
      <FaArrowLeft />
      Voltar
    </button>
  );
}
