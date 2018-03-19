import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Image.css';

class Image extends Component {

  render() {
    return (
        <div className="image-and-title-caption-container">
          <img src={this.props.smallUrl} className="gallery-image" alt="From flicker"/>
          <div className="title-caption-container">
            <div className="title-caption">
              <h2>
                {this.props.title}
              </h2>
            </div>
          </div>
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
