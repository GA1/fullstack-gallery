
const galleryReducer = (state = {
  images: [],
}, action) => {

  var payload = action.payload
  switch (action.type) {
    case "ADD_IMAGES_FROM_BACKEND":
      state = {
        ...state,
        images: payload.images
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;