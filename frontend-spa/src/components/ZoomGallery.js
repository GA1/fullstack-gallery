import React, { Component } from 'react';
import {connect} from "react-redux";
import '../css/ZoomGallery.css';
import { choosePreviousPicture, chooseNextPicture, stopZoomingPicture
} from '../actions/Actions'

class ZoomGallery extends Component {

  render() {
    console.log(this.props.imageUrl)
    return (
      <div className="gallery-for-zooming">
        <div className="arrow left" onClick={() => this.props.choosePreviousPicture()} />
        <img src={this.props.imageUrl} className="zoomed-image" alt="From flicker"/>
        <div className="arrow right" onClick={() => this.props.chooseNextPicture()} />
        <div className="close" onClick={() => this.props.stopZoomingPicture()}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let reducer = state.galleryReducer;

  return {
    imageUrl: reducer.images[reducer.indexOfChosenImage].bigUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choosePreviousPicture: () => {
      dispatch(choosePreviousPicture());
    },
    chooseNextPicture: () => {
      dispatch(chooseNextPicture());
    },
    stopZoomingPicture: () => {
      dispatch(stopZoomingPicture());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ZoomGallery);
