import { SET_TOKENS } from '../constants'
import { ITokenPayload } from '../types'

export const setTokensAction = (payload: ITokenPayload) => ({
    type: SET_TOKENS,
    payload
})