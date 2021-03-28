import React from 'react'
import './InstructorOp.css'

function InstructorOp({loc,name,sub1,sub2,sub3}) {
    return (
        <div className="instructorop">
         <img src={loc} />
         <h4>{name}</h4>
        </div>
    )
}

export default InstructorOp
