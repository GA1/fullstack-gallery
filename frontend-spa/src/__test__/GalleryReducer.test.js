import r from '../reducers/galleryReducer'

describe('galleryReducer', () => {


  it('should properly add images from first page', () => {
    expect(r({
      images: [],
    }, {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: [{
          "url": "someUrl",
          "urlBig": "someUrlBig",
          "title": "someTitle"
        }]
      }
    })).toEqual({
        images: [{
          "url": "someUrl",
          "urlBig": "someUrlBig",
          "title": "someTitle"
        }],
      }
    )
  })



})