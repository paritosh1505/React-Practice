import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputComp from './InputComp'

function App() {
  const [count, setCount] = useState(0)
  const randomWord = [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor',
  'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua']
  return (
    <>
    <InputComp randomWord={randomWord}/>      
    </>
  )
}

export default App
