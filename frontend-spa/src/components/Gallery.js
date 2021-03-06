import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';
import axios from 'axios'
import { addImagesReceivedFromBackend, startLoadingImagesFromBackend,
  stopLoadingImagesFromBackend } from '../actions/Actions'
import ZoomGallery from './ZoomGallery'
import NavigationGallery from "./NavigationGallery";

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
    let someImageChosen = this.props.indexOfChosenImage !== -1
    let noImageChosen = !someImageChosen
    return (
      <div className="gallery">
        <h1 className="gallary-title">Fullstack react gallery</h1>
        {
          noImageChosen && <NavigationGallery/>
        }
        {
          someImageChosen && <ZoomGallery/>
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  let r = state.galleryReducer;
  return {
    images: r.images,
    isLoading: r.isLoading,
    nextPageNumber: r.nextPageNumber,
    indexOfChosenImage: r.indexOfChosenImage
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
