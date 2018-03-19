export function addImagesReceivedFromBackend(images) {
  return {
    type: "ADD_IMAGES_FROM_BACKEND",
    payload: {
      images: images,
    },
  };
}

export function startLoadingImagesFromBackend() {
  return {
    type: "START_LOADING_IMAGES_FROM_BACKEND",
  };
}

export function stopLoadingImagesFromBackend() {
  return {
    type: "STOP_LOADING_IMAGES_FROM_BACKEND",
  };
}

export function choosePicture(indexOfChosenImage) {
  return {
    type: "CHOOSE_PICTURE",
    payload: {
      indexOfChosenImage: indexOfChosenImage,
    },
  };
}

export function choosePreviousPicture() {
  return {
    type: "CHOOSE_PREVIOUS_PICTURE",
  };
}

export function chooseNextPicture() {
  return {
    type: "CHOOSE_NEXT_PICTURE",
  };
}

export function stopZoomingPicture() {
  return {
    type: "STOP_ZOOMING_PICTURE",
  };
}