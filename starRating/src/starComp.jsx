import { useState } from "react";
import { FaStar } from "react-icons/fa";

import './StarButton.css'

const StarComponent = ({noOfStar=5}) => {
    const [colorind,setColorind] = useState(null)
   
    function checkHoverIndex(index){

        setColorind(index)
        
    }
    function resetColor(){
        setColorind(-1)
    }
    function setRating(){
        alert(`Rating given by user is ${colorind+1}`)
    }
    return(
        [...Array(noOfStar)].map(function(_,index){
            
            return <FaStar
            key={index}
             onMouseOver={()=>checkHoverIndex(index)}
            onMouseLeave={resetColor}
            onClick={setRating}
            style={{
                fontSize:"2rem",
                color:index-1<colorind?"yellow":"green"
            }}
            />
        })
    )}
    
    
  
 

export default StarComponent