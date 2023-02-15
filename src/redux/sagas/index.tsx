import { watchGetTokenSaga } from './tokensSaga'
import { watchPostsSaga } from './postsSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        watchGetTokenSaga(),
        watchPostsSaga()
    ])
}