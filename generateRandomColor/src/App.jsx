import { useState } from 'react';
import './App.css'
function setColor(){
  const red = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)

  return [red,green,blue]
 
  
}
function converthex(colorval){
  const red = colorval[0]
  const green = colorval[1]
  const blue = colorval[2]
  const hexred = red.toString(16).padStart(2,'0')
  const hexgreen = green.toString(16).padStart(2,'0')
  const hexblue = blue.toString(16).padStart(2,'0')
  return `${hexred}${hexgreen}${hexblue}`
}
let colordata
function App() {
function setRgbbr(){
   colordata = setColor()
   const red = colordata[0]
   const green = colordata[1]
   const blue = colordata[2]
   colordata = `rgb(${red},${blue},${green})`
   console.log(colordata)
  setrandomColor(colordata)
  sethexStatus(false)
  setRgbcolor(true)
}
function setHexColor(){
  setrandomHexColor(!hexColor)
  colordata = setColor()
  let hexcolorval =  converthex(colordata)
  setrandomHexColor(hexcolorval)
  console.log("********************",hexColor)
  sethexStatus(true)
  setRgbcolor(false)
}
const [rgbColor,setRgbcolor]= useState(false)
const [hxStatus,sethexStatus]= useState(false)
const[color,setrandomColor] = useState(null)
const[hexColor,setrandomHexColor]=useState(null)
return (
    <>
    <div className='App' style={{backgroundColor:color}}>
    <div>
      <button onClick={setRgbbr}>generate rgb color</button>
      {rgbColor && <h1>{color}</h1>}
      <button onClick={setHexColor}>generate hex color</button>
      {hxStatus && <h1>{hexColor}</h1>}
      </div>
    </div>
    </>
  )
}

export default App
