import React from 'react'
import InstructorOp from './InstructorOp'
import './Instructor.css'
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import John from './John';


function Instructor() {
    return (
        <Router>
        <div className="instructor">
                        <div className="instructor__sidebar">
            <h1>Instructor</h1>
            <Link to="/john">
            <Button> 
            <InstructorOp
             loc="https://image.shutterstock.com/image-vector/cute-angry-monster-on-yellow-600w-1020286750.jpg"
             name="John Doe"
             />
             </Button>
             </Link>
             <Button>
             <InstructorOp
             loc="https://image.shutterstock.com/image-vector/cute-angry-monster-on-yellow-600w-1020286750.jpg"
             name="Daphne Doe"
             />
             </Button>   
            </div>
        <Switch >
            <Route path="/john">
                <John />
            </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Instructor
