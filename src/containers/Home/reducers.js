import {FETCH_IMAGE_FAILED, FETCH_IMAGE_REQUESTED, FETCH_IMAGE_SUCCEEDED} from "./constants";

const initialState = {
  currentImage: null,
  loading: false,
  error: false,
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_IMAGE_REQUESTED:
      return Object.assign({}, state, { loading: true, error: false });

    case FETCH_IMAGE_SUCCEEDED:
      return Object.assign({}, state, { loading: false, currentImage: action.payload });

    case FETCH_IMAGE_FAILED:
      return Object.assign({}, state, { loading: false, error: true });

    default:
      return state;
  }
};

export default homeReducers;
