const youtubeSearchReducer = (state=[], action) =>{
    // console.log(action);
    if(action.type === 'search/results'){
        return action.payload;
    }

    return state;
}

export default youtubeSearchReducer;