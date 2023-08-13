import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import "../Videocardclone.css";
const VideoCard = ({ video ,click}) => {
  const { title, views, channel, timestamp, image } = video;
  return (
    <div className="video-card" onClick={click}>
      <img src={image} alt="" className="video-card-thumb" />
      <div className="video-info">
        <AccountCircleIcon className="icons"/>
        <div className="video-text">
          <span>{title}</span>
          <p>{channel}</p>
          <span>
            {views} • {timestamp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
