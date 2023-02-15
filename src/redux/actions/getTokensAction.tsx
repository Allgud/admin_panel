import { FormValues } from "../types"
import { GET_TOKENS } from "../constants"

export const getTokensAction = (payload: FormValues) => ({
    type: GET_TOKENS,
    payload
})