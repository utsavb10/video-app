import React from 'react';

class VideoItem extends React.Component{
    
    render(){
        let video = this.props.video;
        // console.log(video);
        return(
            <div className='item'>
                <div className='content' onClick={this.selectVideo}>
                    <img className='left floated ui tiny image'
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.description}/>
                    <div className='header'>{video.snippet.title}</div>
                    <div className='meta'>{video.snippet.channelTitle}</div>
                </div>
            </div>
        );
    }

    selectVideo = () =>{this.props.onVideoSelect(this.props.video)};
}

export default VideoItem;