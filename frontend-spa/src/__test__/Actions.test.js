import * as actions from '../actions/Actions'

var dummyImage = {
  "url": "someUrl",
}

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const images = [dummyImage, dummyImage]
    const expectedAction = {
      type: "ADD_IMAGES_FROM_BACKEND",
      payload: {
        images: images
      }
    }
    expect(actions.addImagesReceivedFromBackend(images)).toEqual(expectedAction)
  })
})