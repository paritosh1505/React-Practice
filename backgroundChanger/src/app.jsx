import { useState } from 'preact/hooks'
import ButtonComp from './components/ButtonComp'

import './app.css'

export function App() {
  const buttonEntry=['Red','Yellow','Black','Purple','Green','Blue','Default']
    
  return (
    <>
      <ButtonComp buttonEntry={buttonEntry}/>
    </>
  )
}
