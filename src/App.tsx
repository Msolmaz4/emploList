import axios from "axios"
import { useEffect, useState } from "react"


function App() {
   const [count,setCount]= useState(0)
   
   const [dat,setDat] =useState([])
  const data = async()=>{
    const veri =  await  axios.get("https://randomuser.me/api/?results=100")
    if(count === 0){
  
     setDat(veri.data.results.slice(`${count}`,`${count+10}`))
    }
    else{
      console.log(veri.data.results.slice(`${count}`,`${count+10}`)) 
      setDat(veri.data.results.slice(`${count}`,`${count+10}`))
    }

  }
  
  useEffect(()=>{
    data()
  },[count])
  console.log(dat)
  return (
    <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"  ,marginLeft:"700px"}}> 
    <h1>Employe List</h1>
    <h2>(employes {count} to {count+8})</h2>
  <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          {
           dat?.map((item,index)=>(
            <div style={{background: index %2 === 0 ?"white" : "blue"}} key={index}>
              <div> {Object.values(item.name)} </div>
           
            
             <div> {item.email} </div>
             <div> {item.registered.age} </div>
             
            
            </div>
           ))
          }
          <div style={{display:"flex" ,margin:"5px" ,gap:"5px"}}>
          <button   disabled={count === 0} onClick={() => setCount(count - 10)}>prev </button>
            <button onClick={()=>setCount(count +10)}>next </button>
          
         
             </div>
           </div>
    </div>
  )
}

export default App
