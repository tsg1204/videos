import React from 'react';
import VideoItem from './VideoItem.js';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video, i) => {
        return <VideoItem key={i} video={video} />
    })

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;