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

  filterCards =(searchValue) => {
    console.log('searchValue: ', searchValue)
    const result = this.state.buffy.reduce((arr, episode) => {
      let episodeValues = [].concat(...Object.values(episode))
      let newResult = episodeValues.forEach((str) => {
        if (str.toString().toLowerCase().includes(searchValue.toLowerCase()) && !arr.includes(episode)) {
          arr.push(episode)
        }
      })

      return arr;
    }, [])
    console.log('result', result)

  }

  render() {
    const { buffy, angel } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Buffy Flix
          </h1>
        </header>
        <Search buffyEpisodes = {buffy} 
                angelEpisodes = {angel} 
                filter = {this.filterCards} />
        <Carousel buffyEpisodes = {buffy} 
                  angelEpisodes = {angel} />
      </div>
    );
  }
}



export default App;
