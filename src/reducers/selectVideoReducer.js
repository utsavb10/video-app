const selectVideo = (state = null, action) => {
    if(action.type === 'select/video'){
        // console.log(action.payload);
        return action.payload;
    }

    return state;
};

export default selectVideo;