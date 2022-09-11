import React from "react";
import Navbar from "./navbar"
import Dash from "../dashboard"
import Card from "./card"

export default function App() {
    return(
        <div>
            <Navbar/>
            <Card/>
            <Dash/>
        </div>
    )
}