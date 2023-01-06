import React, {Component} from "react";

class Search extends Component{
    state = { artistQuery: ''};
    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value});
    }
    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }
    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery);
    }
    render(){
        return(
            <div>
                <input onChange={this.updateArtistQuery} placeholder='Search for an artist'/>
                <button onClick={this.searchArtist} onKeyPress={this.handleKeyPress}>Search</button>
            </div>
        )
    }
}
export default Search;