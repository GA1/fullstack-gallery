import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';
import axios from 'axios'
import { addImagesReceivedFromBackend, startLoadingImagesFromBackend,
  stopLoadingImagesFromBackend } from '../actions/Actions'
import Image from "./Image";
import CircularProgressBar from "./CircularProgressBar";
var Masonry = require('react-masonry-component');

class Gallery extends Component {


  constructor() {
    super();
    this.DISTANCE_FROM_END_TO_TRIGGER_SCROLL_DOWN_REACHED = 100;
    this.setEventHandlerForScrollReachedBottom = this.setEventHandlerForScrollReachedBottom.bind(this)
    this.fireBottomActionsIfBottomReached = this.fireBottomActionsIfBottomReached.bind(this)
  }

  componentDidMount() {
    this.getImagesFromBackend()
    this.setEventHandlerForScrollReachedBottom();
  }

  setEventHandlerForScrollReachedBottom() {
    document.addEventListener('scroll', this.fireBottomActionsIfBottomReached);
  }

  fireBottomActionsIfBottomReached() {
    if ((window.innerHeight + window.scrollY) + this.DISTANCE_FROM_END_TO_TRIGGER_SCROLL_DOWN_REACHED
        >= document.body.offsetHeight) {
      if (!this.props.isLoading)
        this.getImagesFromBackend()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.fireBottomActionsIfBottomReached)
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
        $this.props.stopLoadingImagesFromBackend()
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
            this.props.images.map((image, index) => (<Image key={index} url={image.url} />))
          }
        </Masonry>
        {
          this.props.isLoading && <CircularProgressBar/>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    images: state.galleryReducer.images,
    isLoading: state.galleryReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImagesReceivedFromBackend: (images) => {
      dispatch(addImagesReceivedFromBackend(images));
    },
    startLoadingImagesFromBackend: () => {
      dispatch(startLoadingImagesFromBackend());
    },
    stopLoadingImagesFromBackend: () => {
      dispatch(stopLoadingImagesFromBackend());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
