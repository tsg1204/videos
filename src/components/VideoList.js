import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedList = videos.map((video, i) => {
        return <VideoItem key={i} video={video} handleVideoSelect={handleVideoSelect} />
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;