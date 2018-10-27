import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import { tvShow, spinOff, episodes } from './Data.js';
import Carousel from './Carousel.js';
import Watchlist from './Watchlist.js';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        allEpisodes: [],
        filteredEpisodes: [],
        clickedCards: [] 
      }
  }

  componentDidMount() {
      Promise.all([fetch('https://whateverly-datasets.herokuapp.com/api/v1/tvShow'),
        fetch('https://whateverly-datasets.herokuapp.com/api/v1/spinOff')])
    .then(([responseOne, responseTwo]) => [responseOne.json(), responseTwo.json()])
    .then(([buffy, angel]) => {
      this.setState({
        allEpisodes: tvShow.episodes.concat(spinOff.episodes),
        filteredEpisodes: tvShow.episodes.concat(spinOff.episodes)
      })
    })
    .catch(error => console.log(error))
  }

  filterEpisodes =(searchValue) => {
    const filteredEpisodes = this.state.allEpisodes.reduce((arr, episode) => {
      let episodeValues = [].concat(...Object.values(episode))
      episodeValues.forEach((str) => {
        if (str.toString().toLowerCase().includes(searchValue.toLowerCase()) && !arr.includes(episode)) {
          arr.push(episode)
        }
      })
      return arr;
    }, []);

    this.setState({
      filteredEpisodes
    })
  }

  addToWatchList = (clickedEpisode) => {
    this.setState({
      clickedCards: [...this.state.clickedCards, clickedEpisode]
    })
  }

  removeFromWatchlist = (removedCard) => {
    var cardIndex = this.state.clickedCards.indexOf(removedCard);
    this.state.clickedCards.splice(cardIndex, 1)
    this.setState({
      clickedCards: this.state.clickedCards
    })  
  }

  shiftCarousel = (e) => {
    console.log(e.target)
    if (e.target.className === "fas fa-angle-right") {
      let spliced = this.state.filteredEpisodes.splice(0, 3)
      this.setState({
      filteredEpisodes: this.state.filteredEpisodes.concat(spliced)
      })
    } else {
      let spliced = this.state.filteredEpisodes.splice(this.state.filteredEpisodes.length -3, 3)
      this.setState({
      filteredEpisodes: spliced.concat(this.state.filteredEpisodes)
      })

    }
  }

  render() {
    const { allEpisodes, filteredEpisodes } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="header">
            Buffy Flix
          </h1>
        </header>
        <Search allEpisodes = {allEpisodes} 
                filterEpisodes = {this.filterEpisodes} />
        <Carousel filteredEpisodes = {filteredEpisodes} 
                  addToWatchList = {this.addToWatchList} 
                  shiftCarousel = {this.shiftCarousel}/>
        <Watchlist clickedCards={this.state.clickedCards}         
                                removeFromWatchlist={this.removeFromWatchlist} />

      </div>
    );
  }
}



export default App; 
