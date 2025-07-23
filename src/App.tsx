import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from '@pages/Calendar';
import TypeCard from '@pages/TypeCard';
import CEP from '@pages/CEP'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/tipo-envio" element={<TypeCard />} />
        <Route path="/cep" element={<CEP />} />
      </Routes>
    </Router>
  );
}