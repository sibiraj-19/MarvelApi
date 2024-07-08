import React,{useState,useEffect}from "react"
import './App.css'
import axios from "axios"
import Marvel from './marvel'
import image from './assets/download.jpeg'
 const Key="189641c07f65029e978e803af6d3c722";
 const ts="2";
 const hash="e2aa0f2c72de62da7fec11da55e75071";

function Character() {
  const [link,setLink]=useState(`http://gateway.marvel.com/v1/public/characters?ts=2&apikey=189641c07f65029e978e803af6d3c722&hash=e2aa0f2c72de62da7fec11da55e75071`)
  const[item,setItem]=useState();
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(link)
     setItem(res.data.data.results);
     console.log(res.data.data.results)
    }
    fetch();
  },[link])
  return (
    <>
   <div id="header">
<div className="bg"> 
<img src={image} alt="marvel" />
</div>

   </div>
   <div id="content">
    <Marvel/>
    {
      (!item)?<h6>Not Found </h6>:<Marvel data={item}/>
    }

  
             
    </div>
       
      
    </>
  )
}

export default Character
