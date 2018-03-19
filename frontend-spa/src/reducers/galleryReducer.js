
const galleryReducer = (state = {
  images: [],
  isLoading: false,
}, action) => {

  var payload = action.payload
  switch (action.type) {
    case "ADD_IMAGES_FROM_BACKEND":
      state = {
        ...state,
        images: state.images.concat(payload.images),
      };
      break;

    case "START_LOADING_IMAGES_FROM_BACKEND":
      state = {
        ...state,
        isLoading: true,
      };
      break;

    case "STOP_LOADING_IMAGES_FROM_BACKEND":
      state = {
        ...state,
        isLoading: false,
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;