import { useState } from "react";
import styles from "./inputItem.module.css";
import AddNewComponent from "./AddNewComponet";
const InputItem = () => {
  const [singleInput,setsingleInput] = useState("")
  const[input,setInput]= useState([])
  function AddEvent(){
  setInput((prev)=>[...input,singleInput])
  setsingleInput("")
  

  }  
  function EnterValue(e){
    //console.log(e.target.value)
    setsingleInput(e.target.value)
  }
  return (
        <div>
          <h3 className={styles.headervalue}>ToDOList </h3>
          <input onChange={EnterValue} type = "text" className={styles.inputvalue} placeholder= "Enter Your Value"/>
        <button onClick ={AddEvent} type = "Submit" className={styles.buttonvalue}>Add Item</button>
        {input.length!=0?<AddNewComponent input={input}/>:null}
        </div>

      );
}
 
export default InputItem;