import { useState } from 'react'

import styles from './App.module.css'
import InputItem from './components/InputItem'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className= {styles.outer}>
    <div className = {styles.rootvalue}>
    <InputItem/>
    </div>
    
    </div>
    
    </>
    
  )
}

export default App
