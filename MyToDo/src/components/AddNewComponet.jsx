import { useRef, useState } from "react";
import AddTodoItem from "./AddToDoItem";
import styles from "./addcomp.module.css";

const AddNewComponent = ({input}) => {
var counter = 0
const divref= useRef(null)
const [items, setItems] = useState(input);
const [clickDelete,setClickDelete] =useState(0)
const [buttonStyle,setButtonstyle] = useState(styles.buttonvalue)
function AddButtonCalled(e){
    
    e.target.style.background='green'
    e.target.textContent ="ADDED"
}


    return(
    <div  className={styles.continer} >
        {input.map((inp,index)=>(
            <div ref ={divref} key = {index} className={styles.component} >
            <p >{inp}</p>
            <div  className={styles.buttonsContainer}>
            <button 
             id={index} 
              className={buttonStyle}
               onClick={AddButtonCalled} 
               type="submit">
                Add
            </button>


                </div>
                
            
           
            </div>
            
        )
        )
        
        }
        
    
    
   </div>

    ) 
    
   
};
 
export default AddNewComponent;



