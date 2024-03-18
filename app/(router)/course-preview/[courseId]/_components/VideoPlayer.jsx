import React from "react";

function VideoPlayer({ videoUrl, poster }) {
  return (
    <div className="mt-2">
      <video
        height={250}
        poster={poster}
        controls
        key={videoUrl}
        width={1000}
        className="rounded-sm"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
