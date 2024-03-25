import styles from "./MobileScreen.module.css"

import ButtonComponent from "./ButtonComponent";

const MobileScreen = () => {
    return (  
        <>
        <input className={styles.inputValue} type = "text" pattern="[789][0-9]{9}" ></input>
        <ButtonComponent buttonName={"Send OTP"}/>
        
        </>
        
    );
}
 
export default MobileScreen;