import React from 'react'
import './Expertise.css'


function Expertise({loc,title}) {
    return (
        <div className="expertise">
            <img src={loc} />
            <h1>{title}</h1>
        </div>
    )
}

export default Expertise
