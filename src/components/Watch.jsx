import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import video1 from '../images/thumb.avif';
import videos from './videos'
import './Watch.css'
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import LibraryAddIcon from '@mui/icons-material/LibraryAddOutlined';
import FileDownloadIcon from '@mui/icons-material/FileDownloadOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ContentCutIcon from '@mui/icons-material/ContentCutOutlined';
const Watch = () => {

  const comments = [
    {
      id: 1,
      name: 'Alice',
      message: 'Great video! Thanks for sharing.',
    },
    {
      id: 2,
      name: 'Bob',
      message: 'I learned a lot from this tutorial.',
    },
    {
      id: 3,
      name: 'Charlie',
      message: 'Can you please explain this part in more detail?',
    },
    {
      id: 4,
      name: 'David',
      message: 'This is really helpful. Keep up the good work!',
    },
    {
      id: 5,
      name: 'Emma',
      message: 'I have a question about the second step.',
    },
    {
      id: 6,
      name: 'Frank',
      message: 'Your explanations are always so clear. Thank you!',
    },
    {
      id: 7,
      name: 'Grace',
      message: 'I shared this with my friends. They loved it!',
    },
    {
      id: 8,
      name: 'Henry',
      message: 'I wish I had found this sooner. Very informative.',
    },
    {
      id: 9,
      name: 'Isabella',
      message: 'Could you provide more examples in the next video?',
    },
    {
      id: 10,
      name: 'Jack',
      message: 'Awesome content! Looking forward to more.',
    },
  ];


  const[comment,setComment]=useState("")

  const { id } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id, 10);
      const wvid = videos.filter((video) => video.id === numericId);
      const v = wvid[0];
      setVideo(v);
    }
  }, [id]);

  const [subscribed, setSubscribed] = useState(false)
  const [notify, setNofity] = useState(false);
  const handleSub = () => {
    setSubscribed(!subscribed)
    setNofity(false);
  }
  const handleNotify = () => {
    setNofity(!notify);
  }
  const [showComments, setShowComments] = useState(false);
  const handleDown = () => {
    setShowComments(!showComments)
  }
  return (
    <div className="watch-container">
      <div className="left-container">
        <div className="video-container">
          <img src={video1} alt="" className='video-screen' />
        </div>
        <div className="title-container">
          {video.title}
          <div className='video-content-info'>
            {video.views} views • {video.timestamp}
          </div>
        </div>
        <div className="main-video-likes-container">
          <div className="like-button m-tile">
            <ThumbUpIcon className='like-container-icon'/> {"240"}
          </div>
          <div className="dislike-button m-tile">
            <ThumbDownIcon className='like-container-icon'/> {"10"}
          </div>
          <div className="share-button m-tile">
            <ShareIcon className='like-container-icon'/>
            <span className='icon-text'>Share</span>
          </div>
          <div className="donate-button m-tile">
            <VolunteerActivismIcon/>
            <span className='icon-text'>Thanks</span>
          </div>
          <div className="download-button m-tile">
            <FileDownloadIcon/>
            <span className='icon-text'>Download</span>
          </div>
          <div className="save-button m-tile">
            <LibraryAddIcon/>
            <span className='icon-text'>Save</span>
          </div>
          <div className="cut-button m-tile">
            <ContentCutIcon/>
            <span className='icon-text'>Clip</span>
          </div>
        </div>
        <div className="info-container">
          <div className="left-info-container">
            <div className="channel-logo">
              <AccountCircleIcon className='channel-logo' />
            </div>
            <div className="channel-name">
              {video.channel} • <small>250k</small>
            </div>
          </div>
          <div className="right-info-container">
            {/* <div className='likes-container-main'>
              <ThumbUpIcon />
              <ThumbDownIcon />
            </div> */}
            <div className="subscribe">
              <div className={subscribed ? "icon-sub" : "icon"} onClick={handleSub}>{subscribed ? "SUBSCRIBED" : "SUBSCRIBE"}</div>
            </div>
            <div className="bell" onClick={handleNotify}>
              {subscribed &&
                <>
                  {!notify && <NotificationsIcon className='bell-icon' />}
                  {notify && <NotificationsActiveIcon className='bell-icon' />}
                </>
              }
            </div>
          </div>
        </div>
        <div className="comments-container">
          <div className="number-of-comments">
            <div className="nofcomments" onClick={handleDown}>
              150 Comments
            </div>
            <div className="down-icon" onClick={handleDown}>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className="comment-elements">
            <div className="comment-input">
              <input type="text" placeholder='Write your comment ....' className='com-input' value={comment} onChange={(e)=>setComment(e.target.value)}/>
              {comment.length!==0 && <button className="comment-btn">Send</button>}
            </div>
          </div>
        </div>
        {showComments &&
          <>
            <div className="all-comments">
              {comments.map((comment) => {
                return <div className='main-comments-container'>
                  <div className="comment" key={comment.id}>
                    <div className="account-avatar">
                      <AccountCircleIcon style={{ fontSize: "40px" }} />
                    </div>
                    <div className="comment-account-name">
                      {comment.name} • <small>1 hour ago</small>
                    </div>
                  </div>

                  <div className="comment-message-container">
                    <div className="comment-info">
                      {comment.message}
                    </div>
                    <div className="likes">
                      <div className="likes-container">
                        <ThumbUpIcon />
                        <ThumbDownIcon />
                        <span href='/' className='reply'>reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </>
        }
      </div>
      <div className="right-container">
        {
          videos.map((video) => {
            return <div className="side-video-container">
              <div className="image-container">
                <img src={video1} alt="img here" className='img-container-image' />
              </div>
              {/* <div className="side-info-container">
                <div className="video-title">{video.title?.length >= 20 ? video.title.slice(0, 45) + "..." : video.title}</div>
                <div className="side-video-channel-name">
                  <AccountCircleIcon />
                  {video.channel}
                </div>
                <div className="side-video-views-container">
                  {video.views} • {video.timestamp}
                </div>
              </div> */}
              <div className="side-info-container">
                <div className="channel-logo-container">
                  <AccountCircleIcon className='acc-logo' />
                </div>
                <div className="side-video-info-container">
                  <div className="video-title">{video.title?.length >= 20 ? video.title.slice(0, 80) + "..." : video.title}</div>
                  <div className="more-video-details">
                    <div className="side-video-channel-name">{video.channel}  {<span className="side-video-dot" style={{ marginLeft: "4px" }}> •</span>}
                    </div>
                    <div className="video-views-container">{video.views} • {video.timestamp}</div>
                  </div>
                  <div className="video-views-container-2">
                    {video.views} views • {video.timestamp}
                  </div>


                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Watch