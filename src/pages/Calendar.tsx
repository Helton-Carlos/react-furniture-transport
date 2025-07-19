import { useState } from 'react'

function Calendar() {
  const [name,] = useState('Calendar page')

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

export default Calendar
