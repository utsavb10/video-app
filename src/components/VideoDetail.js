import React from 'react';
import {connect} from 'react-redux';

class VideoDetail extends React.Component{
    render(){
        let video = this.props.video;

        if(!video){
            return(
                <div className='ui segment'>Loading...</div>
            );
        }

        return(
            <div>
                <div className='ui embed'>
                    <iframe width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title={video.snippet.title}
                        allowFullScreen />
                </div>
                <div className='card content'>
                    <h1 className='header'>{video.snippet.title}</h1>
                    <h4 className='meta'>{video.snippet.channelTitle}</h4>
                    <div className='description'>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        video: state.selectedVideo
    };
}

export default connect(mapStateToProps)(VideoDetail);