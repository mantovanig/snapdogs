import { FETCH_IMAGE_REQUESTED, FETCH_IMAGE_SUCCEEDED, FETCH_IMAGE_FAILED } from "./constants";

export function fetchImageRequested() {
  return {
    type: FETCH_IMAGE_REQUESTED,
  };
}

export function fetchImageSucceded(image) {
  return {
    type: FETCH_IMAGE_SUCCEEDED,
    payload: image,
  };
}

export function fetchImageFailed(error) {
  return {
    type: FETCH_IMAGE_FAILED,
    payload: error,
  };
}
