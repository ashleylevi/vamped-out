import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <li className="card"
      style={{ backgroundImage: `url(${this.props.episode.image})` }} >
        {
          this.props.episode.name
        }
        <i class="fas fa-plus"></i>
      </li>
    );
  }
}