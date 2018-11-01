import React, { Component } from 'react';
import './main.scss';

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
     <div className="overlay"></div>
       <h3 className="watchlist-title">{this.props.card.name}</h3>
       <p>Season {this.props.card.season}:
        Episode {this.props.card.number}</p>
       <i className="remove-button far fa-times-circle" onClick={this.handleState}></i>
     </li>
   );
 }
}
