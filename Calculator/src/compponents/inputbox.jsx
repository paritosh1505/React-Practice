import { useState } from "react";
import ButtonComp from "./buttonComp";
import InputComponent from "./inputComponent";
import styles from "./inputbox.module.css"

const InputBoxEntry = () => {
    const[inputEntry,setInputEntry]= useState('')
    const handleButtonEntry=(button)=>{
        setInputEntry((addbutton)=>addbutton+button)
        //return button
    }
    const clearInput =()=>{
        setInputEntry("")
    }
    const setNewResult=(result)=>{
        setInputEntry(result)
    }
    return (  
        <div className={styles.divtextbody}>
            <InputComponent inputEntry={inputEntry}/>
            <div className={styles.buttonbody}>
            <ButtonComp handleButtonEntry = {handleButtonEntry} currentInput={inputEntry} clearInput={clearInput} setNewResult={setNewResult}/>
            </div>
                        
        </div>

    );
}
 
export default InputBoxEntry;