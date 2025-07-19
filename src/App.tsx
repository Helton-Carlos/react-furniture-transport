import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="*" element={<Contact />} />
      </Routes>
    </Router>
  );
}