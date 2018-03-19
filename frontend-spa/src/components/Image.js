import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Image.css';

class Image extends Component {

  render() {
    return (
      <div className="image-container">
        <img src={this.props.smallUrl} className="gallery-image" alt="from Flickr"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Image);
