import { useState } from 'react'

function Contact() {
  const [name,] = useState('Contato page')

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

export default Contact
