import { useState } from 'preact/hooks';
import './buttonComp.css'

const ButtonComp = ({buttonEntry}) => {
    const[color,setColor] = useState("buttonCssDiv")
    const setbackGroundColor = (button)=>{
        console.log("***",button)
        setColor(button)
    }
    return (  
        <div className = {color}>
            {
               
                buttonEntry.map((button,index)=>(
                    <button key={index} className={`buttonCss${button}`} onClick={()=>setbackGroundColor(`buttonCssDiv${button}`)} type = "submit">{button}</button>
                ))
            }
                
            
        </div>
    );
}
 
export default ButtonComp;