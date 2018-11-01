import React from 'react';
import WatchlistCard from './WatchlistCard.js';
import './main.scss';


export default function Watchlist(props) {
  return (
    <div className="watchlist-wrapper">
      <h2 className="watchlist-header">Your Watchlist</h2>
      <button className="button watchlist-button left-button"><i className="fas fa-angle-left" onClick={props.shiftWatchlist}></i></button>
      <div className="watchlist">
        <ul>
          {
            props.clickedCards.map((card, index) => {
              return <WatchlistCard key={index} card={card}
                      removeFromWatchlist={props.removeFromWatchlist} />
            })
          }
        </ul>
      </div>
        <button className="button watchlist-button right-button"><i className="fas fa-angle-right"onClick={props.shiftWatchlist}></i></button>
    </div>
  );
}
