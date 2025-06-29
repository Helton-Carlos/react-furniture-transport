import { useState } from 'react';
import { useNavigate } from 'react-router';

function App() {
  const [name,] = useState('React')
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-accent flex justify-between p-4'>
        <h1
          className="p-4 text-3xl font-bold"
          onClick={() => navigate('/')}
        >
          {name}
        </h1>

        <button
          className="bg-primary text-white p-2 rounded"
          onClick={() => navigate('/contact')}>
          Contato
        </button>
      </div>
    </>
  )
}

export default App
