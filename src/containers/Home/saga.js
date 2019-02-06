import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_IMAGE_REQUESTED } from './constants';
import { fetchImageSucceded, fetchImageFailed } from './actions';
import { request } from '../../utils/request';

// const mockImage = 'https://images.dog.ceo/breeds/maltese/n02085936_7311.jpg';

export function* fetchRandomByBreed() {
  try {
    const reqUrl = 'https://dog.ceo/api/breed/maltese/images/random';
    const res = yield call(request, reqUrl);
    const { message } = res;
    yield put(fetchImageSucceded(message));

  } catch (e) {
    yield put(fetchImageFailed(e));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(FETCH_IMAGE_REQUESTED, fetchRandomByBreed);
}
