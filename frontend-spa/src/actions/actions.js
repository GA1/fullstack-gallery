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

export function chooseImage(indexOfChosenImage) {
  return {
    type: "CHOOSE_IMAGE",
    payload: {
      indexOfChosenImage: indexOfChosenImage,
    },
  };
}

export function choosePreviousImage() {
  return {
    type: "CHOOSE_PREVIOUS_IMAGE",
  };
}

export function chooseNextImage() {
  return {
    type: "CHOOSE_NEXT_IMAGE",
  };
}

export function stopZoomingImage() {
  return {
    type: "STOP_ZOOMING_IMAGE",
  };
}