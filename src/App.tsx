import { useState } from 'react'

function App() {
  const [name,] = useState('React')

  return (
    <>
      <div>
        <h1 className="bg-accent p-4 text-3xl font-bold">
          {name}
        </h1>
      </div>
    </>
  )
}

export default App
