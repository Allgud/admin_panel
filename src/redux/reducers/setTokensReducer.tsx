import { SET_TOKENS } from "../constants";
import { ITokenPayload } from "../types";
import { Cookies } from "react-cookie";

interface ITokenState {
    accessTokenTime: number | null,
    refreshTokenTime: number | null
}

interface ITokenActionType {
    type: string,
    payload: ITokenPayload
}

const initialState: ITokenState = {
    accessTokenTime: null,
    refreshTokenTime: null
}

export const cookies = new Cookies()

const tokenReducer = (state = initialState, action: ITokenActionType) => {
    switch (action.type) {
        case SET_TOKENS:
            cookies.set('access_token', action.payload.access_token)
            cookies.set('refresh_token', action.payload.refresh_token)
            return {
                ...state,
                accessTokenTime: action.payload.access_expired_at
            };
        default: return state
    }
}

export default tokenReducer