import React,{useState,useEffect}from "react"
import './App.css'
// import Marvel from './marvel'
import Character from './Character.jsx'
import Content from "./Content"
import { Route,Routes } from "react-router-dom"
function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Character/>}/>
      <Route path="/:id" element={<Content/>}/>

    </Routes>
    </>
  )
}

export default App

   