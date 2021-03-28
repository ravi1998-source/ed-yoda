import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home'
import Module from './Module'
import Instructor from './Instructor'

function Sidebar() {
    return (
        <Router>
        <div className="sidebar">
        <Link to="/">
            <Button>
                <SidebarOptions icon={<HomeIcon />} title="Home" />
            </Button>
        </Link>
        <Link to="/modules">
            <Button>
                <SidebarOptions icon={<ViewModuleIcon />} title="Modules" />
            </Button>
        </Link>
        <Link to="/instructors">
            <Button>
                <SidebarOptions icon={<SupervisorAccountIcon />} title="Instructor" />
            </Button>
        </Link>
        <Switch>
            <Route path="/modules">
                <Module />
            </Route>
            <Route path="/instructors">
                <Instructor />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Sidebar
