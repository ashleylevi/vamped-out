import React from 'react';
import './Watchlist.css';
import WatchlistCard from './WatchlistCard.js';


export default function Watchlist(props) {
  return (
      <div className="watchlist">
        <ul>
          <WatchlistCard episode={props.clickedCards}/>
        </ul>
      </div>
    );
  }
