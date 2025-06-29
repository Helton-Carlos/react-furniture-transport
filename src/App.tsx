import { useState } from 'react'

function App() {
  const [name,] = useState('React')

  return (
    <>
      <div>
        <h1 className="bg-amber-400 text-3xl font-bold underline">
          {name}
        </h1>
      </div>
    </>
  )
}

export default App
