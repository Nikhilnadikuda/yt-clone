import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Shorts from "./components/Shorts";
import Library from './components/Library'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './Appclone.css'
import Subscribers from "./components/Subscribers";
import RecommendationTiles from "./components/RecommendationTiles";
import Watch from './components/Watch'
function App() {
  const [openmenu, setOpenmenu] = useState(true);
  const toggleMenu = () => {
    setOpenmenu(!openmenu)
  }
  const [content, setContent] = useState("")
  useEffect(() => {
    setContent(content)
  }, [content])
  const Home = () => {
    return <div className="container">
      <div className={`content-container ${openmenu ? "open" : "close"}`}>
        <Content content={content} />
      </div>
    </div>
  }
  const SideBar = () => {
    return <div className={`sidebar-container ${openmenu ? "open" : "close"}`}>
      <Sidebar openmenu={openmenu} />
    </div>
  }

  const HomeContainer = () => {
    return <>
      <Outline />
      <RecommendationTiles setContent={setContent} />
      <Home content={content} />
    </>
  }

  const ShortsContainer=()=>{
    return <>
      <Outline/>
      <Shorts/>
    </>
  }

  const SubscriptionsContainer=()=>{
    return <>
      <Outline/>
      <Subscribers/>
    </>
  }


  // const LibraryContainer=()=>{
  //   return <>
  //     <Outline/>
  //     <Library/>
  //   </>
  // }

  const Outline = () => {
    return <>
      <Header openmenu={openmenu} toggleMenu={toggleMenu} />
      <SideBar />
    </>
  }

  const WatchContainer=()=>{
    return <>
        <Header openmenu={openmenu} toggleMenu={toggleMenu} />
        <Watch/>
    </>
  }


  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomeContainer />} />
        <Route path="/feed/shorts" element={<ShortsContainer />} />
        <Route path="/subscribers" element={<SubscriptionsContainer />} />
        <Route path="/library" element={<Library/>}/>
        <Route path="/watch/:id" element={<WatchContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
