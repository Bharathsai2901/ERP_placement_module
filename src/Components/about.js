import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = ()=>{
  
  const navigate = useNavigate()
  const callAboutPage = async ()=>{
    try{
      const res = await fetch("/about", {
        method:"get", 
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      })
      const data = await res.json()

      if(!res.status === 200){
          const error = new Error("Unauthorized Entry")
          throw error
      }
      else{
        navigate("/about")
      }
    }catch(err){
        console.log(err.message)
    }
  }
  useEffect(()=>{
    callAboutPage()
  }, [])
  return (
    <form method="GET">
      <h1>This is about us Page</h1>
    </form>
  )
}

export default About