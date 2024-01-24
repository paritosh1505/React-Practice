import { useRecoilState } from "recoil";
import "./ButtonComp.css";
import axios from 'axios';
import { isButtonClicked } from "../atom";
const ButtonComponent = ({buttonName}) => {
    const [ClickState,setClickState] = useRecoilState(isButtonClicked)
    function ClickButton(){
        setClickState(true)
    }
    return (  
        <>
        <button className="buttonStyle" type = "submit" onClick={ClickButton} >{buttonName} </button>
        </>
    );
}
 
export default ButtonComponent;