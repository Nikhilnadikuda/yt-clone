import React from "react";
import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.css'
function App() {
  return (
    <div className="">
        <Header/>
        <div className="container">
          <div className="sidebar-container">
            <Sidebar/>
          </div>
          <div className="content-container">
            <Content/>
          </div>
        </div>
    </div>
  );
}

export default App;
