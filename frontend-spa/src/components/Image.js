import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Image.css';
import { chooseImage } from '../actions/Actions'

class Image extends Component {

  render() {
    return (
      <div className="image-and-title-caption-container">
        <img src={this.props.smallUrl} className="gallery-image" alt="From flicker"/>
        <div className="title-caption-container" onClick={() => this.props.chooseImage(this.props.index)} >
          <div className="title-caption">
            <h2> {this.props.title} </h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseImage: (indexOfChosenImage) => {
      dispatch(chooseImage(indexOfChosenImage));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
