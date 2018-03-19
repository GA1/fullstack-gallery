import React, { Component } from 'react';
import {connect} from "react-redux";
import '../css/ZoomGallery.css';
import { choosePreviousImage, chooseNextImage, stopZoomingPicture } from '../actions/Actions'

class ZoomGallery extends Component {

  render() {
    return (
      <div className="gallery-for-zooming">
        {
          !this.props.isFirst && <div className="arrow left" onClick={() => this.props.choosePreviousImage()} />
        }
        <img src={this.props.imageUrl} className="zoomed-image" alt="From flicker"/>
        {
          !this.props.isLast && <div className="arrow right" onClick={() => this.props.chooseNextPicture()} />
        }
        <div className="close" onClick={() => this.props.stopZoomingPicture()}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var reducer = state.galleryReducer
  var images = reducer.images
  let indexOfChosenImage = reducer.indexOfChosenImage;
  return {
    imageUrl: images[indexOfChosenImage].bigUrl,
    isLast: indexOfChosenImage === images.length - 1,
    isFirst: indexOfChosenImage === 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosePreviousImage: () => {
      dispatch(choosePreviousImage());
    },
    chooseNextPicture: () => {
      dispatch(chooseNextImage());
    },
    stopZoomingPicture: () => {
      dispatch(stopZoomingPicture());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ZoomGallery);
