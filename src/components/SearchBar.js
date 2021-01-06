import React from 'react';
import { connect } from 'react-redux';
import { searchVideos } from '../actionCreators';
class SearchBar extends React.Component {
    
    state = {
        searchText: ''
    };

    onInputChange = (event) =>{
        this.setState({ searchText: event.target.value});
    }

    onSearchSubmit = (event) =>{
        event.preventDefault(); //default browser behaviour is refresh
        // console.log(searchVideos);
        // console.log(this.props.searchVideos);
        this.props.searchVideos(this.state.searchText);
    }

    //used semantic ui website for preffered classes
    render(){
        return(
            <div className='ui search segment'>
                <form onSubmit={this.onSearchSubmit}>
                    <div className='ui input'>
                            <input className="prompt" 
                                type='text' 
                                placeholder='Enter Search'
                                value={this.state.searchText}
                                onChange={this.onInputChange} />
                            <button type="submit" className="ui icon button"><i className="youtube red large icon" /></button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect( null, {searchVideos})(SearchBar);