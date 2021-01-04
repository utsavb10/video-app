import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItemList from './VideoItemList';
// import ReactDOM from 'react-dom';

class App extends React.Component {

    state = {
        searchResponseData : [],
        selectedVideo: null
    };

    render(){
        return (
            <div className='ui container'>
                <SearchBar onSearchBarSubmit={this.onSearchSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoItemList videos={this.state.searchResponseData} onVideoSelect={this.onVideoSelect}/>
            </div>
        );
    }
    
    onSearchSubmit = async (searchText) => {
        // console.log(searchText);
        let searchResponse = await youtube.get('/search',{
            params: {
                q: searchText
            }
        });

        // console.log(searchResponse);
        this.setState({searchResponseData : searchResponse.data.items});
        // console.log(this.state.searchResponseData);
    };

    onVideoSelect = async (selectVideo) => {
        this.setState({selectedVideo : selectVideo});
        console.log(selectVideo);
    }
}

export default App;