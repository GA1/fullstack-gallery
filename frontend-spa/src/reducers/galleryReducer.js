
const articleDataReducer = (state = {
  images: [],
}, action) => {

  switch (action.type) {
    case "SOME_NOT_YET_IMPLEMENTED_ACTION":
      state = {
        ...state,
      };
      break;

    default:
      break;
  }
  return state;
};

export default articleDataReducer;