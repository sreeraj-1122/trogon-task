import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl }) => {
  if (!videoUrl) {
    return <p className="text-red-500">No video available.</p>;
  }

  return (
    <div className="flex justify-center w-full">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="500px"
        className="shadow-lg rounded-lg"
        playing={false} 
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1, 
              rel: 0,
              showinfo: 0, 
              disablekb: 0, 
              fs: 1, 
              iv_load_policy: 3,
            },
          },
          vimeo: {
            playerOptions: {
              title: 0, 
              byline: 0,  
              portrait: 0,  
              responsive: true, 
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
