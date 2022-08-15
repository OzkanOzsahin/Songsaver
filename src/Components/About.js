import React from 'react'
import { Link } from "react-router-dom"

function About() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
        </nav>
        <div className= "about">
        <h2>Hello,</h2>
        <p>
         My name is Ozkan. Currently i am following the Winc Academy full stack development course. 
         This is my React project: Songsaver.   
        </p>
        </div>

        
        </>
    )
}

export default About