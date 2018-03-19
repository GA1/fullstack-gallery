import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';
import axios from 'axios'
import { addImagesReceivedFromBackend, startLoadingImagesFromBackend,
  stopLoadingImagesFromBackend } from '../actions/Actions'
import Image from "./Image";
import CircularProgressBar from "./CircularProgressBar";
import ZoomGallery from './ZoomGallery'
var Masonry = require('react-masonry-component');

class NavigationGallery extends Component {


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
    console.log(this.props.nextPageNumber)
    var $this = this
    this.props.startLoadingImagesFromBackend()
    axios.get('/api/v1/images/sportImages?pageNumber=' + this.props.nextPageNumber)
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
            this.props.images.map((image, index) => (<Image key={index}
                                                            smallUrl={image.smallUrl}
                                                            title={image.title}
                                                            index={image.index}
            />))
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
    nextPageNumber: state.galleryReducer.nextPageNumber,
    indexOfChosenImage: state.galleryReducer.indexOfChosenImage
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationGallery);
