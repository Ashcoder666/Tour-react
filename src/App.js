import { useState,useEffect } from "react"
import React from 'react'
import Loading from "./Loading";
import Tours from './Tours'
import Axios from 'axios'
const App = () => {
    const [loading,setLoading] = useState(true);
    const [tours,setTours] = useState([])

    useEffect(()=>{
        fetchTours()
    },[])

    const fetchTours = async()=>{
        setLoading(true)
        await Axios.get("http://localhost:3001/tour-api").then((response)=>{
            setTours(response.data)
        })
        setLoading(false)
    }
 const deleteFunction = (id)=>{
    const newArr = tours.filter((item)=>item.id !== id)
    setTours(newArr)
 }
const refresh= ()=>{
    
        fetchTours()
    
}


    if(loading){
        return(
          <div>

        <Loading />

          </div>

        ) 
    }
  return (
    <div>
    <Tours tours={tours } deleteFunction={deleteFunction} />
    {tours.length===0 ?<button style={{width:'200px',height:'60px', marginBottom:'10px',backgroundColor:'blue',fontSize:'20px',color:'white',marginLeft:'300px'}} onClick={refresh}>FetchTours</button>: null}
    </div>
  )
}

export default App
