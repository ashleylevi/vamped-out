import React from 'react';
import './Watchlist.css';
import WatchlistCard from './WatchlistCard.js';


export default function Watchlist(props) {
  return (
      <div className="watchlist">
        <ul>
        {
          props.clickedCards.map(card => {
            return <WatchlistCard clickedCards={props.clickedCards} />
          })
        }
        </ul>
      </div>
    );
  }
