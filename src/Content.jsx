import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Content.css'

const Content = () => {
    const {id}=useParams();
    const [item,setItem]=useState();
    const fetch=async()=>{
        const res=await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=189641c07f65029e978e803af6d3c722&hash=392734f2f99beb5eedd0c5502bcbdbe5`)
 setItem(res.data.data.results[0])
 console.log(res.data.data.results[0])
    }
    fetch();
  return (
    <>
    {
        (!item)? "":(
            <div id='grid'>
                <div className='image'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="..." />
                </div>
                <div className='about'>
                   <h2>{item.name}</h2> <br />
                   <h3>{item.description}</h3>
                </div>
            </div>
        )
        
    }
    </>
  )
}

export default Content