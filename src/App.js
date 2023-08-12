import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Shorts from "./components/Shorts";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Subscribers from "./components/Subscribers";
import Library from "./components/Library";
function App() {
  const[openmenu,setOpenmenu]=useState(true);
  const toggleMenu=()=>{
    setOpenmenu(!openmenu)
  }

  const Home=()=>{
    return <div className="container">
    
    <div className={`content-container ${openmenu?"open":"close"}`}>
      <Content/>
    </div>
  </div>
  }
  const SideBar=()=>{
    return <div className={`sidebar-container ${openmenu?"open":"close"}`}>
    <Sidebar openmenu={openmenu}/>
  </div>
  }
  return (
    <Router>
        <Header openmenu={openmenu} toggleMenu={toggleMenu}/>
        <SideBar/>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/feed/shorts" element={<Shorts/>} />
          <Route path="/subscribers" element={<Subscribers/>}/>
          <Route path="/li" />
        </Routes>
    </Router>
  );
}

export default App;
