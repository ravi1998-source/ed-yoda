import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  Header from './Header'
import Topbar from './Topbar'
import Sidebar from './Sidebar'


function App() {
  return (
    <div className="app">
      <Header />
      <Topbar />
      <Sidebar />
      
      <div className="app__body">
      
       </div>
    </div>
  
    

  );
}

export default App;



        