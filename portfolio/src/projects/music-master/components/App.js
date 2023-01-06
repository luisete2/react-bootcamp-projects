import React, {Component} from 'react';
import Artist from './Artist';
import Search from './Search';
import Tracks from './Tracks';
const API_ADDRESS = "https://spotify-api-wrapper.appspot.com/artist/";

class App extends Component {
    state = {artist: null, topTracks: []};
    componentDidMount(){
        this.searchArtist('daft punk');
    }
    searchArtist = artistQuery => {
        fetch(API_ADDRESS+artistQuery).then(response => response.json()).then(json => {
            if(json.artists.total > 0){
                const artist = json.artists.items[0];
                this.setState({artist});
                fetch(API_ADDRESS+artist.id+'/top-tracks').then(response => response.json()).then(json => this.setState({topTracks: json.tracks})).catch(error => alert(error.message));
            }else{
                window.alert("Artist not found.");
            }
        }).catch(error => alert(error.message));
    }
    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist}/>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.topTracks} />
            </div>
        );
    }
}
export default App;