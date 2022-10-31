import React, {useState, useEffect} from "react";
import Navbar from "./staff-nav"
import Card from "./card"

export default function App(){
    const [completeCompany, setCompleteCompany] = useState([])

    useEffect(()=>{
        async function getCompany(){
            const res = await fetch("/uploadDetails")
            const jsonData = await res.json()
            setCompleteCompany(jsonData)
        }
        getCompany()
    }, [])
    
    return(
        <div>
            <Navbar/>
            <Card companyDetails = {completeCompany}/>
        </div>
    )
}