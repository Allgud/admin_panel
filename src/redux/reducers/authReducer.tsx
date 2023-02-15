import { LOGIN } from "../constants";

interface ILogin {
    isAuth: boolean
}

interface IActionType {
    type: string
}

const initialState: ILogin = {
    isAuth: false,
}

const authReducer = (state = initialState, action: IActionType) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true }
        default: return state
    }
}

export default authReducer

