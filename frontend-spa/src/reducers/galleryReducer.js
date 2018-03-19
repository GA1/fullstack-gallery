
const galleryReducer = (state = {
  images: [],
  isLoading: false,
  nextPageNumber: 1,
  indexOfChosenImage: -1
}, action) => {
  var newIndex = state.indexOfChosenImage
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

    case "CHOOSE_IMAGE":
      state = {
        ...state,
        indexOfChosenImage: payload.indexOfChosenImage,
      };
      break;

    case "CHOOSE_PREVIOUS_IMAGE":
      if (0 < newIndex)
        newIndex--
      state = {
        ...state,
        indexOfChosenImage: newIndex,
      };
      break;

    case "CHOOSE_NEXT_IMAGE":
      if (newIndex < state.images.length - 1)
        newIndex++
      state = {
        ...state,
        indexOfChosenImage: newIndex,
      };
      break;

    case "STOP_ZOOMING_IMAGE":
      state = {
        ...state,
        indexOfChosenImage: -1,
      };
      break;

    default:
      break;
  }
  return state;
};

export default galleryReducer;