import React, { Component } from 'react';
import './WatchlistCard.css';

export default class WatchlistCard extends Component {
  constructor (props) {
    super(props);
  }

    handleState = () => {
      this.props.removeFromWatchlist(this.props.card)
    }

  render() {
   return (
     <li className="watchlist-card">
       <h3>{this.props.card.name}</h3>
       <p>Season {this.props.card.season}:
        Episode {this.props.card.number}</p>
       <i className="remove-button far fa-times-circle" onClick={this.handleState}></i>
     </li>
   );
 }
}
