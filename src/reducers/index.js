import {combineReducers} from 'redux';
import youtubeSearchReducer from './youtubeReducer';
import selectVideo from './selectVideoReducer';

export default combineReducers({
    videos: youtubeSearchReducer,
    selectedVideo: selectVideo
});