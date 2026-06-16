import { all } from 'redux-saga/effects'

import { watchUserActions } from './userSaga'

export default function* rootSaga() {
    yield all([
        watchUserActions()
    ])
}