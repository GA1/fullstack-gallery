import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';
import axios from 'axios'
import { addImagesReceivedFromBackend } from '../actions/actions'
import Image from "./Image";
var Masonry = require('react-masonry-component');

class Gallery extends Component {


  componentDidMount() {
    this.getImagesFromBackend()
  }

  getImagesFromBackend() {
    var $this = this
    axios.get('/api/v1/images/randomImages')
      .then((resp) => {
        let body = resp.data;
        $this.props.addImagesReceivedFromBackend(body)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  render() {
    var masonryOptions = {
      transitionDuration: 300
    };

    return (
      <div className="gallery">
        <Masonry options={masonryOptions} >
          {
            this.props.images.map((image, index) => (<Image url={image.url} />))
          }
        </Masonry>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    images: state.galleryReducer.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImagesReceivedFromBackend: (images) => {
      dispatch(addImagesReceivedFromBackend(images));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
