import React from 'react'
import './ModuleSideOp.css'

function ModuleSideOp({icon, title}) {
    return (
        <div className="moduleside">
            <img src={icon}></img>
            <p>{title}</p>
        </div>
    )
}

export default ModuleSideOp
