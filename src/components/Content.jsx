import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import '../Contentclone.css'
import videos from './videos'
import { useNavigate } from 'react-router-dom'

const Content = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300)
  }, [props.content])
  const navigate = useNavigate();
  // function generate(input) {
  //   const key = 'nikhil128';
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // let encrypted = '';

  // for (let i = 0; i < 11; i++) {
  //   const digit = parseInt(input, 10);
  //   const keyCharCode = key.charCodeAt(i % key.length);
  //   const encryptedCharCode = (digit + keyCharCode) % characters.length;
  //   encrypted += characters.charAt(encryptedCharCode);
  // }

  // return encrypted;
  // }
  const handleClick = (id) => {
    navigate(`/watch/${id}`);
  }
  return (
    <>
      {<div className='main-content-container'>
        {!loading && videos.filter((video) => {
          return video.catergory.includes(props.content);
        }).map((video) => {
          return <VideoCard video={video} key={video.id} click={() => handleClick(video.id)} />;
        })}
        {!loading && videos.filter((video) => {
          return video.catergory.includes(props.content);
        }).length === 0 && <p>No content found</p>}
      </div>
      }
    </>


  )
}

export default Content