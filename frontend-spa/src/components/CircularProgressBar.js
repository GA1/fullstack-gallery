import React, { Component } from 'react';
import '../css/CircularProgressBar.css';

class CircularProgressBar extends Component {

  render() {
    return (
        <div className="loader-container">
          <div className="loader" />
        </div>
    );
  }
}

export default CircularProgressBar
