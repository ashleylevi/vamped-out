import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <li className="card">
        {
          this.props.episode.name
        }
        
      </li>
    );
  }
}