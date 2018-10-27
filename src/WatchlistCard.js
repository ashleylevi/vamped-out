import React, { Component } from 'react';
import './WatchlistCard.css';

export default class WatchlistCard extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <li className="watchlist-card">
      {this.props.clickedCards.name} 
      </li>
    );
  }
}
