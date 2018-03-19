import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';

class Gallery extends Component {
  render() {
    return (
        <div className="images-container">
          {'images will be listed here!'}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    galleryReducer: state.galleryReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
