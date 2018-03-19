import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/Gallery.css';
import axios from 'axios'
import { addImagesReceivedFromBackend } from '../actions/actions'

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
    return (
      <div className="images-container">
        {
          this.props.images.map((image, index) => (
                image.url
            )
          )
        }
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
