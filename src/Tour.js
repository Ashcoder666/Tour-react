import React, { useState } from 'react'


const Tour = ({id,name,description,travelExpense,image,deleteFunction}) => {
    const [readmore,setReadmore] = useState(false)
  return (
    <div key={id} style={{border:"1px black solid",textAlign:"center",width:'500px',marginLeft:'auto',marginRight:"auto"}}>
      <h1>{name}</h1>
      <h3>{readmore?description:`${description.substring(0,100)}`}<button onClick={()=>{setReadmore(!readmore)}} style={{backgroundColor:"white",border:"none"}}>
          {readmore?"Read less":'Read more'}</button></h3>
      
      <img src={image} alt={name} style={{width:'300px'}}/>
      <h2>price : {travelExpense}</h2>
      <button onClick={()=>{deleteFunction(id)}}
      style={{width:'100px',height:'40px', marginBottom:'10px',backgroundColor:'blue',fontSize:'20px',color:'white'}}>
          Delete</button>
    </div>
  )
}

export default Tour
