import r from '../reducers/galleryReducer'
import {
  addImagesReceivedFromBackend, startLoadingImagesFromBackend,
  stopLoadingImagesFromBackend, choosePreviousImage, chooseNextImage, stopZoomingImage, chooseImage
} from '../actions/Actions'

describe('galleryReducer', () => {

  var dummyImage = {
    "smallUrl": "someSmallUrl",
    "bigUrl": "someBigUrl",
    "title": "someTitle"
  }

  let dummyImage2 = {
    "smallUrl": "someSmallUrl2",
    "bigUrl": "someBigUrl2",
    "title": "someTitle2"
  };

  it('should properly add images from first page', () => {
    expect(r({
      images: [],
      isLoading: false,
      nextPageNumber: 1,
      indexOfChosenImage: -1,
    }, addImagesReceivedFromBackend([dummyImage])
    )).toEqual({
        images: [dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: -1,
      }
    )
  })

  it('should properly add images from the second page', () => {
    expect(r({
      images: [dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: -1,
    }, addImagesReceivedFromBackend([dummyImage2])
    )).toEqual({
        images: [dummyImage, dummyImage2],
        isLoading: false,
        nextPageNumber: 3,
        indexOfChosenImage: -1,
      }
    )
  })

  it('should properly start loading images', () => {
    expect(r({
      images: [],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: -1,
    }, startLoadingImagesFromBackend()
    )).toEqual({
        images: [],
        isLoading: true,
        nextPageNumber: 2,
        indexOfChosenImage: -1,
      }
    )
  })

  it('should properly stop loading images', () => {
    expect(r({
      images: [],
      isLoading: true,
      nextPageNumber: 2,
      indexOfChosenImage: -1,
    }, stopLoadingImagesFromBackend()
    )).toEqual({
        images: [],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: -1,
      }
    )
  })

  it('should properly choose an image', () => {
    expect(r({
      images: [dummyImage, dummyImage, dummyImage, dummyImage, dummyImage, dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: -1,
    }, chooseImage(5)
    )).toEqual({
        images: [dummyImage, dummyImage, dummyImage, dummyImage, dummyImage, dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: 5,
      }
    )
  })

  it('choose previous image should not decrement image number if the first picture was chosen before', () => {
    expect(r({
      images: [dummyImage, dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: 0,
    }, choosePreviousImage()
    )).toEqual({
        images: [dummyImage, dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: 0,
      }
    )
  })

  it('choose previous image should correctly decrement index of chosen image', () => {
    expect(r({
      images: [dummyImage, dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: 1,
    }, choosePreviousImage()
    )).toEqual({
        images: [dummyImage, dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: 0,
      }
    )
  })

  it('choose next image should not increment image number if the last picture was chosen before', () => {
    expect(r({
      images: [dummyImage, dummyImage, dummyImage, dummyImage, dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: 4,
    }, chooseNextImage()
    )).toEqual({
        images: [dummyImage, dummyImage, dummyImage, dummyImage, dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: 4,
      }
    )
  })

  it('choose next image should correctly increment index of chosen image', () => {
    expect(r({
      images: [dummyImage, dummyImage, dummyImage, dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: 2,
    }, chooseNextImage()
    )).toEqual({
        images: [dummyImage, dummyImage, dummyImage, dummyImage],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: 3,
      }
    )
  })

  it('stop zooming image should correctly stop zooming the image', () => {
    expect(r({
          images: [dummyImage, dummyImage, dummyImage, dummyImage],
          isLoading: false,
          nextPageNumber: 2,
          indexOfChosenImage: 2,
        }, stopZoomingImage()
    )).toEqual({
          images: [dummyImage, dummyImage, dummyImage, dummyImage],
          isLoading: false,
          nextPageNumber: 2,
          indexOfChosenImage: -1,
        }
    )
  })


})