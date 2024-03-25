import { useState } from 'react'
import './App.css'
import GitComponent from './GitComponent'

function App() {
  const [count, setCount] = useState(0)
  const userProfile = "paritosh1505"
  return (
    <>
    <GitComponent userProfile = {userProfile}/>      
    </>
  )
}

export default App
