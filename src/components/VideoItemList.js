import React from 'react';
import VideoItem from './VideoItem';

class VideoItemList extends React.Component {

    render(){
        let videos = this.props.videos;
        // console.log(videos);
        // let renderedList;
    let renderedList = videos.map((video) => {
        return(<VideoItem 
          key={video.id.videoId}
          onVideoSelect={this.props.onVideoSelect}
          video={video} />)}
        );

        return(
        <div className='ui relaxed divided list'>{renderedList}</div>
        );
    }
}

export default VideoItemList;