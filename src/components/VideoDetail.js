import React from "react";
import DOMPurify from "dompurify";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const cleanHTML = DOMPurify.sanitize(video.snippet.title);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          <span dangerouslySetInnerHTML={{ __html: cleanHTML }}></span>
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;