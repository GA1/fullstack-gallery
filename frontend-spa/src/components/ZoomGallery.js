import React, { Component } from 'react';
import {connect} from "react-redux";
import '../css/ZoomGallery.css';

class ZoomGallery extends Component {

  render() {
    console.log(this.props.imageUrl)
    return (
        <div className="gallery-for-zooming">
          <div className="arrow left" />
          <img src={this.props.imageUrl} className="zoomed-image" alt="From flicker"/>
          <div className="arrow right"/>
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomGallery);
