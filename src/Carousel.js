import React from 'react';
import './Carousel.css';
import Card from './Card.js';


export default function Carousel(props) {
  return (
      <div className="carousel">
        
        <ul>
          {
            props.buffyEpisodes.map((episode) => {
              return <Card episode={episode} />
            })
          }
          {
            props.angelEpisodes.map((episode) => {
              return <Card episode={episode} />
            })
          }
        </ul>
      </div>
    );
  }
