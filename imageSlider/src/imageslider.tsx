import { useState } from 'react'

function ImagesliderWithLocal() {
    const [image,setImage] = useState(['image1.jpeg','image2.jpeg','image3.jpeg','image4.jpeg','image5.jpeg']);
    const [index,setIndex]=useState(0)
    
    function changeImagePrev(){
        if(index>0){
          setIndex(index-1)
          setImage(image)
        }
    }
    function changeImageNext(){
      
      if(index<image.length){
        setIndex(index+1)
        setImage(image)
      }
    }
      return (
        <div id ="container">
          <div className='buttonprev'>
          <button onClick={changeImagePrev} className='buttonprev'>&#10094;</button>
          </div>
          <div>
          <img  className ="imageContainer" src={image[index]}></img>
          
          </div>
          <div className='buttonnext'>
          <button onClick={changeImageNext} className='buttonnext' >&#10095;</button>
          </div>
          
        </div>
        
      )
}

export default ImagesliderWithLocal