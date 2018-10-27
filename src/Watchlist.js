import React from 'react';
import './Watchlist.css';
import WatchlistCard from './WatchlistCard.js';
import './Watchlist.css';


export default function Watchlist(props) {
  return (
    <div className="watchlist-wrapper">
      <h2>Your Watch List</h2>
      <div className="watchlist">
        <ul>
          {
            props.clickedCards.map(card => {
              console.log(card)
              return <WatchlistCard card={card} />
            })
          }
        </ul>
      </div>
    </div>
  );
}
