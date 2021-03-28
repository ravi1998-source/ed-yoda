import React from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';

function Home() {
    return (
        <div className="home">
          <div className="home__element">
            <h1>Continue learning</h1>
            <div className="home__box1">
            <h1>Hello</h1>
            <img
            src="https://w1.pngwing.com/pngs/848/893/png-transparent-yellow-circle-number-javascript-text-area-symbol-sign.png" />
            <ul>
              <li>Progress</li>
              <li>Live session</li>
            </ul>
            </div>
          </div> 
          <div className="home__box2">
            <h1>Progression review</h1>
            <div className="home__box2in">
              <h1>94%</h1>
              <p>Progresss</p>
            </div>
              <p>View progress</p>
            </div> 
        </div>
    )
}

export default Home
