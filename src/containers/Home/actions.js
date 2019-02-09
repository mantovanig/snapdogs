import {
  FETCH_IMAGE_REQUESTED,
  FETCH_IMAGE_SUCCEEDED,
  FETCH_IMAGE_FAILED,
  INITIAL_DATA_REQUESTED,
  INITIAL_DATA_SUCCEEDED,
  INITIAL_DATA_FAILED,
  FETCH_BREEDS_REQUESTED,
  FETCH_BREEDS_SUCCEEDED,
  FETCH_BREEDS_FAILED,
  UPDATE_SELECTED_BREED
} from "./constants";

export function fetchImageRequested(breed) {
  return {
    type: FETCH_IMAGE_REQUESTED,
    payload: breed
  };
}

export function fetchImageSucceded(image) {
  return {
    type: FETCH_IMAGE_SUCCEEDED,
    payload: image
  };
}

export function fetchImageFailed(error) {
  return {
    type: FETCH_IMAGE_FAILED,
    payload: error
  };
}

export function initialDataRequested() {
  return {
    type: INITIAL_DATA_REQUESTED
  };
}

export function initialDataSucceded(data) {
  return {
    type: INITIAL_DATA_SUCCEEDED,
    payload: data
  };
}

export function initialDataFailed(error) {
  return {
    type: INITIAL_DATA_FAILED,
    payload: error
  };
}

export function fetchBreedsRequested() {
  return {
    type: FETCH_BREEDS_REQUESTED
  };
}

export function fetchBreedsSucceded(breeds) {
  return {
    type: FETCH_BREEDS_SUCCEEDED,
    payload: breeds
  };
}

export function fetchBreedsFailed(error) {
  return {
    type: FETCH_BREEDS_FAILED,
    payload: error
  };
}

export function updateSelectedBreed(breed) {
  return {
    type: UPDATE_SELECTED_BREED,
    payload: breed
  };
}
