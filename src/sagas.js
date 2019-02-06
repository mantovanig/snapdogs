import { fork, all } from 'redux-saga/effects';

import homeSaga from './containers/Home/saga';

export default function* root() {
  const sagas = [
    yield fork(homeSaga),

    /* injection placeholder */
  ];
  yield all(sagas);
}
