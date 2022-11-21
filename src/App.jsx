import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hello world</h1>
    <Card />
    </>
  )
}

export default App
