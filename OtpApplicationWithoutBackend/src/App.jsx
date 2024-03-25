import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MobileScreen from './Components/MobileScreen';
import {  useRecoilValue } from 'recoil';

import { isButtonClicked } from './atom';
import OtpComponent from './Components/OtpComponent';
function App() {
  const [count, setCount] = useState(0);
  const buttonState = useRecoilValue(isButtonClicked)
  const navigate = useNavigate();
  useEffect(()=>{
    if(buttonState){
      navigate('/OtpPage')
    }
    
  },[buttonState])
  return (
    
  
    <div className='mainScreen'>

      {"Login Via OTP"}
      {console.log("Button click status",buttonState)}
      <Routes>
      <Route path ="/" element={<MobileScreen/>}/>
      {buttonState?(<Route path ="/OtpPage" element={<OtpComponent/>}/>):null}
      </Routes>
      
        

      </div>
    
  );
}


export default App;
