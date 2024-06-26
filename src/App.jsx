import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="text-2xl bg-red-500 text-white">Hello</h1>
    </>
  )
}

export default App
