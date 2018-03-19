import * as actions from '../actions/Actions'

var dummyImage = {
  "url": "someUrl",
}

var dummyImage2 = {
  "url": "someUrl2",
}

describe('actions', () => {
  it('should create an action to add images from backend', () => {
    const images = [dummyImage, dummyImage2]
    const expectedAction = {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: images
      }
    }
    expect(actions.addImagesReceivedFromBackend(images)).toEqual(expectedAction)
  })

  it('should create an action to start loading images from backend', () => {
    const expectedAction = {
      type: "START_LOADING_IMAGES_FROM_BACKEND",
    }
    expect(actions.startLoadingImagesFromBackend()).toEqual(expectedAction)
  })

  it('should create an action to stop loading images from backend', () => {
    const expectedAction = {
      type: "STOP_LOADING_IMAGES_FROM_BACKEND",
    }
    expect(actions.stopLoadingImagesFromBackend()).toEqual(expectedAction)
  })

  it('should create an action to stop loading images from backend', () => {
    const expectedAction = {
      type: "STOP_LOADING_IMAGES_FROM_BACKEND",
    }
    expect(actions.stopLoadingImagesFromBackend()).toEqual(expectedAction)
  })

  it('should create an action to choose previous image', () => {
    const expectedAction = {
      type: "CHOOSE_PREVIOUS_IMAGE",
    }
    expect(actions.choosePreviousImage()).toEqual(expectedAction)
  })

  it('should create an action to choose next image', () => {
    const expectedAction = {
      type: "CHOOSE_NEXT_IMAGE",
    }
    expect(actions.chooseNextImage()).toEqual(expectedAction)
  })

  it('should create an action to stop zooming the image', () => {
    const expectedAction = {
      type: "STOP_ZOOMING_IMAGE",
    }
    expect(actions.stopZoomingPicture()).toEqual(expectedAction)
  })



})