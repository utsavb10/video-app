import React from 'react';
import {connect} from 'react-redux';
import {selectVideo} from '../actionCreators';

class VideoItem extends React.Component{
    
    render(){
        let video = this.props.video;
        // console.log(video);
        return(
            <div className='item'>
                <div className='content' onClick={this.videoSelect}>
                    <img className='left floated ui tiny image'
                      src={video.snippet.thumbnails.default.url}
                      alt={video.snippet.description}/>
                    <div className='header'>{video.snippet.title}</div>
                    <div className='meta'>{video.snippet.channelTitle}</div>
                </div>
            </div>
        );
    }

    videoSelect = () =>{this.props.selectVideo(this.props.video)};
}

//no need of mapStateToProps

export default connect(null, {selectVideo})(VideoItem);