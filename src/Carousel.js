import React from 'react';
import './Carousel.css';
import Card from './Card.js';


export default function Carousel(props) {
  return (
      <div className="carousel">
        <ul>
          {
            props.episodes.map((episode, index) => {
              return <Card episode={episode.name}/>

            }).slice(0, props.episodeCount)
          }
        </ul>
      </div>
    );
  }
