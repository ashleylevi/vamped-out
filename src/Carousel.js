import React from 'react';
import './Carousel.css';
import Card from './Card.js';


export default function Carousel(props) {
  return (
      <div className="carousel">t
        <ul>
          <button className="button left-button"><i class="fas fa-angle-left"></i></button>
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
          <button className="button right-button"><i class="fas fa-angle-right"></i></button>
        </ul>
      </div>
    );
  }
