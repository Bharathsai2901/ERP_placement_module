import React from 'react';
import ReactDOM from "react-dom";
import Navbar from "./Components/navbar.js"
import Card from "./Components/card"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./home_style.css"
import "./styles/card.css"

export default function App(){
   
    return(
        <div>
            <Navbar />
            <Card/>
       </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"));