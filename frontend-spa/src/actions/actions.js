export function addImagesReceivedFromBackend(images) {
  return {
    type: "ADD_IMAGES_FROM_BACKEND",
    payload: {
      images: images,
    },
  };
}
