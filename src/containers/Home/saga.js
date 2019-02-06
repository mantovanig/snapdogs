import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_IMAGE_REQUESTED } from './constants';
import { fetchImageSucceded, fetchImageFailed } from './actions';
import { pause } from '../../utils/saga';

const mockImage = 'https://images.dog.ceo/breeds/maltese/n02085936_7311.jpg';

export function* fetchRandomByBreed() {
  try {
    yield call(pause, { millis: 2000 });
    yield put(fetchImageSucceded(mockImage));

  } catch (e) {
    yield put(fetchImageFailed());
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FETCH_IMAGE_REQUESTED, fetchRandomByBreed);
}
