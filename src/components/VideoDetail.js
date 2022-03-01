import React from 'react';

const VideoDetail = ( {video} ) => {

    if (!video) {
        return <div>Loading ...</div>
    }

    const videoSourse = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
              <iframe title="video player" src={ videoSourse } />
            </div>
            <div className="ui segment">
            <h4 className="ui header">{ video.snippet.title }</h4>
            <p>{ video.snippet.decsription}</p>
            </div>
        </div>
    );

};

export default VideoDetail;