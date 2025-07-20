import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';
import TypeCard from './pages/TypeCard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/tipo-envio" element={<TypeCard />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </Router>
  );
}