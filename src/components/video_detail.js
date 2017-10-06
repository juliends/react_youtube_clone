import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  
  return (
    <div className="">
      <div className="">
        <iframe className="" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;