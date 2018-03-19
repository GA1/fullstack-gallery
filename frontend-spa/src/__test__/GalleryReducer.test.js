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
      isLoading: false,
    }, {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: [dummyImage]
      }
    })).toEqual({
        images: [dummyImage],
        isLoading: false,
      }
    )
  })

  it('should properly add images from second load', () => {
    expect(r({
      images: [dummyImage],
      isLoading: false,
    }, {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: [dummyImage2]
      }
    })).toEqual({
        images: [dummyImage, dummyImage2],
        isLoading: false,
      }
    )
  })

  it('should properly start loading images', () => {
    expect(r({
      images: [],
      isLoading: false,
    }, {
      type: "START_LOADING_IMAGES_FROM_BACKEND",
    })).toEqual({
        images: [],
        isLoading: true,
      }
    )
  })

  it('should properly stop loading images', () => {
    expect(r({
      images: [],
      isLoading: true,
    }, {
      type: "STOP_LOADING_IMAGES_FROM_BACKEND",
    })).toEqual({
        images: [],
        isLoading: false,
      }
    )
  })


})