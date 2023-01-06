import React, {Component} from 'react';

class Jokes extends Component{    
    state = {fadeIn: true, jokeIndex: 0, jokes: []};
    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_ten').then(response => response.json()).then(json => {this.setState({jokes: json})}).catch(error => alert(error.message));
    }
    nextJoke = () =>{
        const jokeIndex = (this.state.jokeIndex + 1) % this.state.jokes.length;
        this.setState({fadeIn: false});
        this.timeout = setTimeout(() => this.setState({jokeIndex: jokeIndex, fadeIn: true}), 500);
    }
    render(){
        const {fadeIn, jokeIndex} = this.state, joke = this.state.jokes[this.state.jokeIndex];
        if (joke === undefined) {
            return <>Loading...</>;
        }else{
            return(
                <div>
                    <h2>Highlighted joke</h2>
                    <p className={fadeIn ? 'joke-fade-in' : 'joke-fade-out'}>{joke.setup} <em>{joke.punchline}</em></p>
                    <button onClick={this.nextJoke}>Another one!</button>
                </div>
            )
        }
    }
}

export default Jokes;