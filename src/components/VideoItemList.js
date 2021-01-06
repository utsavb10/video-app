import React from 'react';
import {connect} from 'react-redux';
import VideoItem from './VideoItem';

class VideoItemList extends React.Component {

    render(){
        let videos = this.props.videos;
        // console.log(videos);
        // let renderedList;
    let renderedList = videos.map((video) => {
        return(<VideoItem 
          key={video.id.videoId}
          video={video} />)}
        );

        return(
        <div className='ui relaxed divided list'>{renderedList}</div>
        );
    }
}

//ownProps argument not needed
const mapStateToProps = state =>{
    return {
        videos: state.videos
    };
}

//no actionCreators used in this component
export default connect(mapStateToProps)(VideoItemList);