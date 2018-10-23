import React, { Component } from 'react';
import './Search.css';
import './App.css'

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <input type="text" placeholder="Search for your favorite Buffy or Angel episodes"/>
      </div>
    );
  }
}