import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Image.css';
import { choosePicture } from '../actions/Actions'

class Image extends Component {

  render() {
    console.log(this.props.index)
    return (
      <div className="image-and-title-caption-container">
        <img src={this.props.smallUrl} className="gallery-image" alt="From flicker"/>
        <div className="title-caption-container" onClick={() => this.props.choosePicture(this.props.index)} >
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
    choosePicture: (indexOfChosenImage) => {
      dispatch(choosePicture(indexOfChosenImage));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
