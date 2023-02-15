import { LOGIN, SET_AUTH_ERROR } from "../constants";

interface ILoginState {
    isAuth: boolean,
    error: string
}

interface IActionType {
    type: string,
    payload?: string
}

const initialState: ILoginState = {
    isAuth: false,
    error: ''
}

const authReducer = (state = initialState, action: IActionType) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true };
        case SET_AUTH_ERROR:
            return { ...state, error: action.payload }
        default: return state
    }
}

export default authReducer

