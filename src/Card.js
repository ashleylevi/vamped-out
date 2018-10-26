import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleState = () => {
    this.setState({
      clicked: true
    })

    this.props.addToWatchList(this.props.episode)
  }


  render() {
    return (
      <li className="card">
      <div className="background" style={{ backgroundImage: `url(${this.props.episode.image})` }}></div><h3 className="episode-name">
        {
          this.props.episode.name
        }
        </h3>
        <div className="caption">
          <h3>Season {this.props.episode.season}</h3>
          <p>{this.props.episode.synopsis}</p>
          <i className="fas fa-plus" onClick={this.handleState}></i>
        </div>
      </li>
    );
  }
}