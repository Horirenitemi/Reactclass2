import React, {useState} from 'react';
import GitHub from "./component/GitHub";

const App = () => {
  const [name, setName] = useState("orire")
  return (
    <div 
    style={{
      margintop:"100px",
      marginLeft:"100px",
    }}>
    <label style={{
      marginRight:"20px",
    }}
    >
     Enter your Name:
    </label>
      <input placeholder="what is your Name" 
      value={name}
      onChange={(e) =>{
      setName(e.target.value); 
    }}
      />
      <button onClick={()=> {
        console.log("I am Tapped");

      }}>Enter</button>
 
      <div>
      welcome {name}</div>
      <GitHub/>
    </div>
  )
  
}

export default App
