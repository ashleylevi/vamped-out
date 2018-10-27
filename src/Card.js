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
    if (this.props.episode.starring.includes('Willow')) {
    return (
      <li className="card">
      <div className="background" style={{ backgroundImage: `url(${this.props.episode.image})` }}></div>
      <div className="overlay"></div>
      <h3 className="episode-name">
        {
          this.props.episode.name
        }
        </h3>
        <h1 className="card-title">Buffy the Vampire Slayer</h1>
        <div className="caption">
          <h3>Season {this.props.episode.season}</h3>
          <p>{this.props.episode.synopsis}</p>
          <i className="fas fa-plus" onClick={this.handleState}></i>
        </div>
      </li>
    )
  } else {
    return (
      <li className="card">
      <div className="background" style={{ backgroundImage: `url(${this.props.episode.image})` }}></div><h3 className="episode-name">
        {
          this.props.episode.name
        }
        </h3>
        <h1 className="card-title">Angel</h1>
        <div className="caption">
          <h3>Season {this.props.episode.season}</h3>
          <p>{this.props.episode.synopsis}</p>
          <i className="fas fa-plus" onClick={this.handleState}></i>
        </div>
      </li>
    )

  }
}
}
