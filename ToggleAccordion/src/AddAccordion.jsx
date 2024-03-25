import { useState } from "react"
import data from "./data";
import "./addAccordion.css"

data
function AddAccordion() {
  console.log(data.length)
  const [state,setState] = useState(null)
  const [isenable,setEnable] = useState(Array(data.length-1).fill(false))
  const [buttonclick,setButton] = useState(false)
  function setCurrentItemid(itemid){
    setState(itemid)
  }
  function isButtonClicked(){
  //  console.log("voilaaaaaaaaaaaaaaaaa")
    setButton(!buttonclick)
  }
  function enableMultiSelection(getItemId){
    const newArray = [...isenable]
    newArray[getItemId]=!newArray[getItemId]

    setEnable(newArray)
  }
  return (
    <div >
      <div className="enablebutton">
      <button onClick={isButtonClicked}  className="accordion">Enable multi Selction</button>
      </div>
       
       {data.map((item,index)=>(
        
        <div key ={item.id} id = {index} className='question1'>
         
          <div className='question'>
            {item.question}
            <button  onClick={()=>(!buttonclick?setCurrentItemid(item.id):enableMultiSelection(item.id))}>+</button>
          </div>
          { 
          !buttonclick && item.id==state &&
           <div className='desc'>   
          {item.answer}
          </div> 
          },
          {
            buttonclick && isenable[item.id] &&
            <div className='desc'>   
           {item.answer}
           </div>
          }
          
          
        </div>
       
        
        
      ))

      }

    </div>
  )
}

export default AddAccordion