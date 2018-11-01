import React, { Component } from 'react';
import './main.scss';
import Trie from '@ashleyplevi/autocomplete';

//instantiate a new tree
//populate it with (start with random words) whatever data a user can search for by typing in the search
//map over dataset and just pull out what you want user to search for(example name, weapon) and populate your tree with that info 
//integrate tree suggestions into search functionality 
//keep track of what user types in. This will be prefix for suggest method on tree
//store suggestions array in state
//only call populate and suggest from trie

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
          { this.state.suggestedWords.map((word) => {
            return  <option value={word} />

          })
           
          }
        </datalist>
      </div>
    );
  }
}