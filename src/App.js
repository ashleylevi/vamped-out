import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import { tvShow, spinOff, episodes } from './Data.js';
import Carousel from './Carousel.js';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        episodes: episodes,
        episodeCount: 5
      }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Buffy Flix
          </h1>
        </header>
        <Search />
        <Carousel episodes={this.state.episodes}
                  episodeCount={this.state.episodeCount}/>
      </div>
    );
  }
}



export default App;
