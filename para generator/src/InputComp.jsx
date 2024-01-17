import { useEffect, useState } from "react";


const InputComp = ({randomWord}) => {
    const[value,setValue]= useState('')
    const [para,setPara] = useState("")
    let randomPara=[]
    useEffect(()=>{
    },[value]) 
    
    function generateWord(event){
        setValue(event.target.value)
     }
     function GenerateNumber(){
        for (let i=0;i<value;i++){
            let index = [Math.floor(i*Math.random(0,value-1))]
            randomPara.push(randomWord[index])
            randomPara.push(" ")
        }
        console.log(randomPara)
        setPara(randomPara)
     }
    return (
        <div  >
            <input style={{padding:'10px',marginRight:'10px'}} type = "text" placeholder = "enter length" onChange={generateWord}></input>
            <button onClick={GenerateNumber} type="submit">Generate</button>
            <div style={{display:'flex'}}>
                <p>{para}</p>
            </div>
        </div>
      )
    
    ;
}
 


export default InputComp;