import axios from 'axios';

//console.developers.google.com
const youtubeDataApiKey = 'AIzaSyAsTr-De45DlA9mPPA24l_mPA1CgZPKE_8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeOut: 5000,
    params: {
        part: 'snippet',
        maxResults: 100,
        key: youtubeDataApiKey
    }
});