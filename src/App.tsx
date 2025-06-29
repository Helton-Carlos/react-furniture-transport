import { useState } from 'react'
import './App.css'

function App() {
  const [name,] = useState('React')

  return (
    <>
      <div>
        {name}
      </div>
    </>
  )
}

export default App
