import { takeLatest, put, call } from 'redux-saga/effects'
import { getTokens } from '../../api'
import { GET_TOKENS } from "../constants"
import { IAuthAction } from '../types'
import { authAction } from '../actions/authAction'
import { setTokensAction } from '../actions/setTokensAction'

export function* handleAuth(action: IAuthAction) {
    const data = yield call(getTokens, action.payload)
    yield put(authAction())
    yield put(setTokensAction(data))
}

export function* watchGetTokenSaga() {
    yield takeLatest(GET_TOKENS, handleAuth)
}