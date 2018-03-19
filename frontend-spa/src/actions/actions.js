export function addImagesReceivedFromBackend(images) {
  return {
    type: "ADD_IMAGES_FROM_BACKEND",
    payload: {
      images: images,
    },
  };
}

export function startLoadingImagesFromBackend(images) {
  return {
    type: "START_LOADING_IMAGES_FROM_BACKEND",
  };
}

export function stopLoadingImagesFromBackend(images) {
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