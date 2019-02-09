import { takeLatest, put, call, select } from "redux-saga/effects";
import _isEmpty from "lodash/isEmpty";

import {
  FETCH_IMAGE_REQUESTED,
  INITIAL_DATA_REQUESTED,
  FETCH_BREEDS_REQUESTED
} from "./constants";
import {
  fetchImageSucceded,
  fetchImageFailed,
  initialDataSucceded,
  fetchBreedsSucceded,
  fetchBreedsFailed,
  initialDataFailed,
  updateSelectedBreed
} from "./actions";
import { request } from "../../utils/request";
import { getBreedsOptions } from "../../utils/breeds";

// const mockImage = 'https://images.dog.ceo/breeds/maltese/n02085936_7311.jpg';

const breedsSelector = state => state.home.breeds;
const selectedBreedSelector = state => state.home.selectedBreed;

export function* fetchRandomByBreed(action) {
  try {
    const breed = action.payload.value;
    const breedUri = breed.replace("-", "/");
    const reqUrl = `https://dog.ceo/api/breed/${breedUri}/images/random`;
    const res = yield call(request, reqUrl);
    if (!res || res.status !== 'success') throw new Error("Error retrieving random image");

    const { message } = res;
    yield put(fetchImageSucceded(message));
  } catch (e) {
    yield put(fetchImageFailed(e));
  }
}

export function* fetchBreedsList() {
  try {
    const reqUrl = "https://dog.ceo/api/breeds/list/all";
    const res = yield call(request, reqUrl);
    if (!res || res.status !== 'success') throw new Error("Error retrieving breeds");

    const { message } = res;
    if (_isEmpty(message)) throw new Error("Empty breeds");

    const breedsOptions = getBreedsOptions(message);

    yield put(fetchBreedsSucceded(breedsOptions));
  } catch (e) {
    yield put(fetchBreedsFailed(e));
  }
}

export function* fetchInitialData() {
  try {
    yield call(fetchBreedsList);
    const breeds = yield select(breedsSelector);

    yield put(updateSelectedBreed(breeds[0]));
    const selectedBreed = yield select(selectedBreedSelector);

    yield call(fetchRandomByBreed, { payload: selectedBreed });
    yield put(initialDataSucceded());
  } catch (e) {
    yield put(initialDataFailed(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FETCH_IMAGE_REQUESTED, fetchRandomByBreed);
  yield takeLatest(INITIAL_DATA_REQUESTED, fetchInitialData);
  yield takeLatest(INITIAL_DATA_REQUESTED, fetchInitialData);
  yield takeLatest(FETCH_BREEDS_REQUESTED, fetchBreedsList);
}
