
const galleryReducer = (state = {
  images: [],
  isLoading: false,
  nextPageNumber: 1,
  indexOfChosenImage: -1
}, action) => {

  var payload = action.payload
  switch (action.type) {
    case "ADD_IMAGES_FROM_BACKEND":
      state = {
        ...state,
        images: state.images.concat(payload.images),
        isLoading: false,
        nextPageNumber: state.nextPageNumber + 1
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

    case "CHOOSE_PICTURE":
      state = {
        ...state,
        indexOfChosenImage: payload.indexOfChosenImage,
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;