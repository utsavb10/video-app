import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoItemList from './VideoItemList';
// import ReactDOM from 'react-dom';

class App extends React.Component {

    render(){
        return (
            <div className='ui container'>
                <SearchBar />
                <VideoDetail />
                <VideoItemList />
            </div>
        );
    }

}

export default App;