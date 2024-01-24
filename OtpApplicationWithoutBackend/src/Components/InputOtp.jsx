import styles from "./inputotp.module.css"
const InputOtp = ({onchange}) => {
    function InputEntry(e){
        console.log("***************"+e.target.value)
    }
    return (  
        <input className={styles.Inputbox} maxLength ="1" type="text" onChange={InputEntry}/>
    );
}
 
export default InputOtp;