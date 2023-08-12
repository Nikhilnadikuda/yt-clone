import React from 'react'
import VideoCard from './VideoCard'
import './Content.css'
const Content = () => {
  const videos=[
    {
      id:1,
      title:"Video Number 1",
      channel:"Nikhil",
      views:"100k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:2,
      title:"Video Number 3",
      channel:"Rajeev",
      views:"200k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:3,
      title:"Video Number 3",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:4,
      title:"Video Number 4",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:5,
      title:"Video Number 5",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:6,
      title:"Video Number 6",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:7,
      title:"Video Number 7",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:8,
      title:"Video Number 8",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    },
    {
      id:9,
      title:"Video Number 9",
      channel:"Athishay",
      views:"500k",
      timestamp:"1 hour ago",
      image:require('../images/thumb.avif')
    }
  ]
  return (
    <div className='main-content-container'>
      {videos.map((video)=>{
        return <VideoCard video={video} key={video.id}/>
      })}
        
    </div>
  )
}

export default Content