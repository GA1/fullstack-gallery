import React, { Component } from 'react';
import {connect} from "react-redux";
import '../css/ZoomGallery.css';
import { choosePreviousImage, chooseNextImage, stopZoomingImage } from '../actions/Actions'

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
        <div className="close" onClick={() => this.props.stopZoomingImage()}/>
        <div className="title"> {this.props.title} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  var reducer = state.galleryReducer
  var images = reducer.images
  let indexOfChosenImage = reducer.indexOfChosenImage;
  let chosenImages = images[indexOfChosenImage];
  return {
    imageUrl: chosenImages.bigUrl,
    title: chosenImages.title,
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
    stopZoomingImage: () => {
      dispatch(stopZoomingImage());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ZoomGallery);
