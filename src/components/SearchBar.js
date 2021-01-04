import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchText: ''
    };

    //this.setState can accept either an object or a function as its argument
    // and perform a shallow merge later on
    onInputChange = (event) =>{
        this.setState({searchText : event.target.value});
    }

    onSearchSubmit = (event) =>{
        event.preventDefault(); //default browser behaviour is refresh
        // console.log(this.state.searchText);
        //execute search
        this.props.onSearchBarSubmit(this.state.searchText);
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
    // could have used an arrow function directly with onChnage in {}
}

export default SearchBar;