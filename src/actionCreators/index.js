import youtube from '../apis/youtube';

export const selectVideo = video =>{
    return {
        type: 'select/video',
        payload: video
    };
};

//because async operation of get() is taking place, middleware is needed which accepts function or the action PJSO
export const searchVideos = q => async dispatch => {
    console.log(q);

    let searchResponse = await youtube.get('/search', {
        params:{
            q //equivalent to q: q
        }
    });

    dispatch({
        type: 'search/results',
        payload: searchResponse.data.items
    });
};

// refactored from this code
// getState wasn't needed hence removed
// export const searchVideos = (q) =>{
//     return async function(dispatch, getState) {
//         let searchResponse = await youtube.get('/saerch', {
//             params:{
//                 q //equivalient to q: q
//             }
//         });

//         dispatch({
//             type: 'search/results',
//             payload: searchResponse.data.items
//         });
//     };
// };