import React, { Component } from 'react';
import './Search.css';
import './App.css'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachValue: '',
    }
  }

  filterCards =(e) => {
    const result = this.props.buffyEpisodes.filter(episode => {
      let episodeValues = Object.values(episode)
      return episodeValues.includes(e.target.value)
    })
    console.log(result)

  }


  render() {
    return (
      <div className="search-bar-container">
        <input type="text" placeholder="Search for your favorite Buffy or Angel episodes" onKeyUp={this.filterCards}/>
      </div>
    );
  }
}