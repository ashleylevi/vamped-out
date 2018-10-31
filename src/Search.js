import React, { Component } from 'react';
import './Search.scss';
import './App.scss'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachValue: '',
    }
  }

  handleState = (e) => {
    this.setState({
      searchValue: e.target.value
    })

    this.props.filterEpisodes(e.target.value);
  } 


  render() {
    return (
      <div className="search-bar-container">
        <input type="text" placeholder="  Search for your favorite Buffy or Angel episodes" onKeyUp={this.handleState}/>
      </div>
    );
  }
}