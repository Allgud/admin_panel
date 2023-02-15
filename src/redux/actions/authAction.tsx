import { LOGIN, SET_AUTH_ERROR } from "../constants";

export const authAction = () => ({
    type: LOGIN
})

export const authErrorAction = (payload: string) => ({
    type: SET_AUTH_ERROR,
    payload
})