import { useState } from "react"
import styles from "./buttonComp.module.css"
import InputComponent from "./inputComponent"

const ButtonComp = ({handleButtonEntry,currentInput,clearInput,setNewResult}) => {
    const calculatorbutton = ['AC','+/-','%','/','7','8','9','X','4','5','6','-','1','2','3','0','.','=','+']
    const[operand1,setOPerand1]=useState(0)
    const[operand2,setOPerand2]=useState(0)
    const[operator,setOperator] = useState("")
    const handleButtonClick = (button) => {
        handleButtonEntry(button)
        
        if (button=='+' || button=='-'|| button=='/'||button=='X'){
            setOPerand1(currentInput)
            setOperator(button)
            clearInput()
        }
        if(button=='=' && operand1!=0){
            console.log("***",currentInput)
            setOPerand2(currentInput)
            if(operator=='+'){
                currentInput=parseInt(operand1)+parseInt(operand2)
            }
            else if(operator=='-'){
                currentInput=parseInt(operand1)-parseInt(operand2)
            }
            else if(operator=='/'){
                currentInput=parseInt(operand1)/parseInt(operand2)
            }
            else if(operator=='X'){
                currentInput=parseInt(operand1)*parseInt(operand2)
            }
            
            setNewResult(currentInput.toString())
        }
        if(button=='AC'){
            clearInput()
        }
        
        
      };
    return (  
        <>
            {
                calculatorbutton.map((button,index)=>{
                    
                    return (
                        <button key={index} type="submit" className={styles.buttonstyles} onClick={()=>handleButtonClick(button)}>
                            {button}
                        </button>
                        
                    );
                })
                
            }
            
        </>
        
       
    );
}
 
export default ButtonComp;