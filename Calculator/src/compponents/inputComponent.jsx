import styles from './inputComponent.module.css';
const InputComponent = ({inputEntry}) => {
    return (  
        <input type = "text" placeholder="Enter No" value={inputEntry} readOnly className={styles.textbody}/>
    );
}
 
export default InputComponent;