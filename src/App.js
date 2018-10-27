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
        angel: [],
        filteredBuffy: [], 
        filteredAngel: [],
        clickedCards: [] 
      }
  }

  componentDidMount() {
      Promise.all([fetch('https://whateverly-datasets.herokuapp.com/api/v1/tvShow'),
        fetch('https://whateverly-datasets.herokuapp.com/api/v1/spinOff')])
    .then(([responseOne, responseTwo]) => [responseOne.json(), responseTwo.json()])
    .then(([buffy, angel]) => {
      this.setState({
        buffy: tvShow.episodes,
        filteredBuffy: tvShow.episodes,
        angel: spinOff.episodes,
        filteredAngel: spinOff.episodes,
      })
    })
    .catch(error => console.log(error))
  }

  filterBuffyCards =(searchValue) => {
    const filteredBuffy = this.state.buffy.reduce((arr, episode) => {
      let episodeValues = [].concat(...Object.values(episode))
      episodeValues.forEach((str) => {
        if (str.toString().toLowerCase().includes(searchValue.toLowerCase()) && !arr.includes(episode)) {
          arr.push(episode)
        }
      })
      return arr;
    }, []);

    this.setState({
      filteredBuffy
    })
  }

   filterAngelCards =(searchValue) => {
    const filteredAngel = this.state.angel.reduce((arr, episode) => {
      let episodeValues = [].concat(...Object.values(episode))
      episodeValues.forEach((str) => {
        if (str.toString().toLowerCase().includes(searchValue.toLowerCase()) && !arr.includes(episode)) {
          arr.push(episode)
        }
      })
      return arr;
    }, []);

    this.setState({
      filteredAngel
    })
  }

  addToWatchList = (clickedEpisode) => {
    this.setState({
      clickedCards: [...this.state.clickedCards, clickedEpisode]
    })
  }

  render() {
    const { buffy, angel, filteredBuffy, filteredAngel } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="animate-header">
            Buffy Flix
          </h1>
        </header>
        <Search buffyEpisodes = {buffy} 
                angelEpisodes = {angel} 
                filterBuffy = {this.filterBuffyCards}
                filterAngel = {this.filterAngelCards}  />
        <Carousel buffyEpisodes = {filteredBuffy} 
                  angelEpisodes = {filteredAngel} 
                  addToWatchList = {this.addToWatchList} />
      </div>
    );
  }
}



export default App;
