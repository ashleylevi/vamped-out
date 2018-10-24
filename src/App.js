import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import { tvShow, spinOff, episodes } from './Data.js';
import Carousel from './Carousel.js';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        buffy: [],
        angel: []
        // episodeCount: 
      }
  }

  componentDidMount() {
      Promise.all([fetch('https://whateverly-datasets.herokuapp.com/api/v1/tvShow'),
        fetch('https://whateverly-datasets.herokuapp.com/api/v1/spinOff')])
    .then(([responseOne, responseTwo]) => [responseOne.json(), responseTwo.json()])
    .then(([buffy, angel]) => {
      this.setState({
        buffy: tvShow.episodes,
        angel: spinOff.episodes
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Buffy Flix
          </h1>
        </header>
        <Search buffyEpisodes={this.state.buffy} 
                angelEpisodes = {this.state.angel} />
        <Carousel buffyEpisodes={this.state.buffy} 
                  angelEpisodes = {this.state.angel} />
      </div>
    );
  }
}



export default App;
