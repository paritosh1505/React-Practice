
import './randomegb.css'
function GenerteRandomRGB() {
  const red = Math.floor(Math.random()*255)
  const green = Math.floor(Math.random()*255)
  const blue = Math.floor(Math.random()*255)

  const colorval = `rgb(${red},${green},${blue})`
  document.body.style.backgroundColor=colorval


  return (
    <>
    </>
  )
}

export default GenerteRandomRGB