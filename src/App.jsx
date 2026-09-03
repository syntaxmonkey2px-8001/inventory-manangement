import { useState } from 'react'

import './App.css'
import FullPanel from './components/FullPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FullPanel/>
    </>
  )
}

export default App
