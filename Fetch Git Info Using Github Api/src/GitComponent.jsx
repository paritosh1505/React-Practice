import { useEffect, useState } from "react";
import axios from "axios";
const GitComponent = ({userProfile}) => {
const [response,setResponse] = useState('')
     useEffect(()=>{
        
        const fetchdata = async() =>{
            try{
            const response = await axios.get(`https://api.github.com/users/${userProfile}`)
            console.log(response)  
            setResponse(response)
        }
        catch(error){
            console.log("error message",error)
        }
    }
    fetchdata()   
    },[userProfile])
    return (  
        <div>
            {response  && response.data && (
              
              <>
              <p>{response.data.login}</p>
             <a href = {response.data.avatar_url}>Github</a>
             
             </>
                
            )}
        </div>
    );
}
 
export default GitComponent;




