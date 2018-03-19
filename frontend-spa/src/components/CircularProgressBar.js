import React, { Component } from 'react';
import '../css/loader.css';

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
