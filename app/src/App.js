import About from "./Components/About";
import Navabr from "./Components/Navabr";
import TextForm from "./Components/TextForm";
import { useState } from "react";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')


  
  const clearbg= ()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    
  }
const togglemode = (cls)=>
{
  clearbg();
  document.body.classList.add('bg-'+cls)
  if(mode==='light')
  {setmode('dark')
  document.body.style.backgroundColor='#358597'
  document.body.style.color='white' 

}
      

else{
 setmode('light')
  document.body.style.backgroundColor='white' 
  document.body.style.color='black'

}
}

  return (
    <>
<Navabr mode={mode} togglemode={togglemode}   />
   





 
 





 <TextForm heading="Enter your data" /> 
 


  <About  mode={mode}/>



</>
  );
}

export default App;
