
import React, { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputOtp from "./InputOtp";

import styles from "./OtpComponent.module.css";
//

const OtpComponent = () => {
  const [index,setIndex] = useState(0);
  const[inputvalue,setInpuValue] = useState(["","","",""])
 const refvalue = [useRef(),useRef(),useRef(),useRef()]
  function handleInputEvent(e){
    if(e.target.value.length==1){
        setIndex(index+1)
    }
    console.log("Input value is "+e.target.value.length)
   refvalue[index+1].current.focus()
    

}
    return (  
       <>
       <div className={styles.OtpStyle}>
        {
            inputvalue.map((ith,value)=>(
             
                <input key = {value} ref= {refvalue[value]} className={styles.Inputbox}  type="text"  maxLength="1" onChange={handleInputEvent}/>
            ))
        }
        
       </div>
       <div>
       <ButtonComponent buttonName={"Verify Otp"}/>
       </div>
       </>
    );
}
 
export default OtpComponent;