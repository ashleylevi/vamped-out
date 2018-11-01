import React, { Component } from 'react';
import './main.scss';
import Trie from '@ashleyplevi/autocomplete';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachValue: '',
      suggestedWords: [],
    }
  }

  handleState = (e) => {
    this.setState({
      searchValue: e.target.value,
      suggestedWords: this.props.trie.suggest(e.target.value)
    })

    this.props.filterEpisodes(e.target.value);
  } 

  render() {
    return (
      <div className="search-bar-container">
        <input type="text" list="characters" placeholder="  Search for your favorite Buffy or Angel episodes" onKeyUp={this.handleState}/>
        <datalist id="characters">
          {
            this.state.suggestedWords.map((word) => {
              return  <option value={word} />
            })
          }
        </datalist>
      </div>
    );
  }
}