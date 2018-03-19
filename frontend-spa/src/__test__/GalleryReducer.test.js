import r from '../reducers/galleryReducer'

var dummyImage = {
  "url": "someUrl",
}

var dummyImage2 = {
  "url": "someUrl2",
}

describe('galleryReducer', () => {

  it('should properly add images from first page', () => {
    expect(r({
      images: [],
      isLoading: true,
      nextPageNumber: 1,
      indexOfChosenImage: -1,
    }, {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: [dummyImage]
      }
    })).toEqual({
        images: [dummyImage],
        isLoading: false,
        nextPageNumber: 2,
      indexOfChosenImage: -1,
      }
    )
  })

  it('should properly add images from second load', () => {
    expect(r({
      images: [dummyImage],
      isLoading: false,
      nextPageNumber: 2,
      indexOfChosenImage: -1,
    }, {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: [dummyImage2]
      }
    })).toEqual({
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
    }, {
      type: "START_LOADING_IMAGES_FROM_BACKEND",
    })).toEqual({
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
    }, {
      type: "STOP_LOADING_IMAGES_FROM_BACKEND",
    })).toEqual({
        images: [],
        isLoading: false,
        nextPageNumber: 2,
        indexOfChosenImage: -1,
      }
    )
  })


})