import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({icon, title}) {
    return (
        <div className="sidebaroptions">
          <p>{icon}</p>
          <h4>{title}</h4>  
        </div>
    )
}

export default SidebarOptions
