import React, {Component} from 'react';
import {connect} from "react-redux";
import '../css/ZoomGallery.css';

class ZoomGallery extends Component {

  render() {
    return (
        <div className="gallery-for-zooming">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoomGallery);
