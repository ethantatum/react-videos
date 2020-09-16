import "./VideoItem.css";
import React from "react";
import DOMPurify from "dompurify";

const VideoItem = ({ video, onVideoSelect }) => {
  // DOMPurify takes outside HTML and sanitizes it to prevent XSS attacks
  const cleanHTML = DOMPurify.sanitize(video.snippet.title);
  return (
    <div onClick={() => onVideoSelect(video)} className=" video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">
          <span dangerouslySetInnerHTML={{ __html: cleanHTML }}></span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
