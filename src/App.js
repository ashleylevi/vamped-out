import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import Carousel from './Carousel.js';
import Watchlist from './Watchlist.js';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        allEpisodes: [],
        filteredEpisodes: [],
        unsortedFiltered: [],
        clickedCards: [] 
      }
    }

  componentDidMount = () => {
   let promise1 =fetch('https://whateverly-datasets.herokuapp.com/api/v1/tvShow')
     .then(response => response.json())
     .then(buffy => buffy.tvShow.episodes)
     .catch(error => console.log(error));

   let promise2 = fetch('https://whateverly-datasets.herokuapp.com/api/v1/spinOff')
     .then(response => response.json())
     .then(angel => angel.spinoff.episodes)
     .catch(error => console.log(error));

   Promise.all([promise1, promise2])
     .then(results => results[0].concat(results[1]))
     .then(items => {
       this.setState({
       allEpisodes: items,
       filteredEpisodes: items,
       unsortedFiltered: items
     })
   })
 }

  filterEpisodes = (searchValue) => {
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
      filteredEpisodes,
      unsortedFiltered: this.state.filteredEpisodes
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

  shiftWatchlist = (e) => {
    if (e.target.className === "fas fa-angle-right") {
      let spliced = this.state.clickedCards.splice(0, 3)
      this.setState({
      clickedCards: this.state.clickedCards.concat(spliced)
      })
    } else {
      let spliced = this.state.clickedCards.splice(this.state.clickedCards.length -3, 3)
      this.setState({
        clickedCards: spliced.concat(this.state.clickedCards)
      })
    }
  }

  sortEpisodes = () => {
    if (document.querySelector('.sort').value === 'Avg Rating') {
      var filteredEpisodes = this.state.filteredEpisodes.sort((a,b) => {
        return b.rating - a.rating;
      })
      var sortedEpisodes = this.state.allEpisodes.sort((a,b) => {
        return b.rating - a.rating;
      })
    } else if (document.querySelector('.sort').value === 'Death Count') {
      var filteredEpisodes = this.state.filteredEpisodes.sort((a,b) => {
        return b.deathcount - a.deathcount;
      })
      var sortedEpisodes = this.state.allEpisodes.sort((a,b) => {
        return b.deathcount - a.deathcount;
      })
    } else {
      var filteredEpisodes = this.state.unsortedFiltered
      var sortedEpisodes = this.state.allEpisodes.sort((a,b) => {
        return b.name < a.name;
      })
    }

    this.setState({
      filteredEpisodes: filteredEpisodes,
      allEpisodes: sortedEpisodes
    })
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
        <div className="search-sort"><Search allEpisodes = {allEpisodes} 
                filterEpisodes = {this.filterEpisodes} />
                <select id="sort" className="sort" onChange={this.sortEpisodes}>
                  <option value ="Episode">Sort by Episode</option>
                  <option value ="Avg Rating">Avg Rating</option>
                  <option value ="Death Count">Death Count</option>
                </select>
                </div>
        <Carousel filteredEpisodes = {filteredEpisodes} 
                  addToWatchList = {this.addToWatchList} 
                  shiftCarousel = {this.shiftCarousel}/>
        <Watchlist clickedCards={this.state.clickedCards}         
                   removeFromWatchlist={this.removeFromWatchlist} 
                   shiftWatchlist = {this.shiftWatchlist}/>

      </div>
    );
  }
}



export default App; 
