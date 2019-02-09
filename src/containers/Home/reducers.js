import {
  FETCH_IMAGE_FAILED,
  FETCH_IMAGE_REQUESTED,
  FETCH_IMAGE_SUCCEEDED,
  INITIAL_DATA_REQUESTED,
  INITIAL_DATA_SUCCEEDED,
  INITIAL_DATA_FAILED,
  FETCH_BREEDS_REQUESTED,
  FETCH_BREEDS_SUCCEEDED,
  FETCH_BREEDS_FAILED,
  UPDATE_SELECTED_BREED
} from "./constants";

const initialState = {
  image: null,
  imageLoading: false,
  breeds: [],
  breedsLoading: false,
  selectedBreed: null,
  loading: false,
  error: false
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUESTED:
      return Object.assign({}, state, {
        imageLoading: true,
      });

    case FETCH_IMAGE_SUCCEEDED:
      return Object.assign({}, state, {
        image: action.payload,
        imageLoading: false,
      });

    case FETCH_IMAGE_FAILED:
      return Object.assign({}, state, {
        imageLoading: false,
        error: true
      });

    case FETCH_BREEDS_REQUESTED:
      return Object.assign({}, state, {
        breedsLoading: false,
      });

    case FETCH_BREEDS_SUCCEEDED:
      return Object.assign({}, state, {
        breeds: action.payload,
        breedsLoading: false,
      });

    case FETCH_BREEDS_FAILED:
      return Object.assign({}, state, {
        breedsLoading: false,
        error: true
      });

    case UPDATE_SELECTED_BREED:
      return Object.assign({}, state, { selectedBreed: action.payload });

    case INITIAL_DATA_REQUESTED:
      return Object.assign({}, state, { loading: true, error: false });

    case INITIAL_DATA_SUCCEEDED:
      return Object.assign({}, state, { loading: false });

    case INITIAL_DATA_FAILED:
      return Object.assign({}, state, { loading: false, error: true });

    default:
      return state;
  }
};

export default homeReducers;
