import React from 'react';
import './Carousel.css';
import Card from './Card.js';


export default function Carousel(props) {
  return (
    <div className="carousel-wrapper">
      <button className="button left-button"><i className="fas fa-angle-left" onClick={props.shiftCarousel}></i></button>
      <div className="carousel">
        <ul>
          {
            props.filteredEpisodes.map((episode) => {
              return <Card episode={episode} 
                           addToWatchList = {props.addToWatchList}/>
            })
          }
        </ul>
      </div>
      <button className="button right-button"><i className="fas fa-angle-right"onClick={props.shiftCarousel}></i></button>
    </div>
    );
  }
