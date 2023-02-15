import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tokenReducer from "./setTokensReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    authReducer,
    tokenReducer,
    postsReducer
})

export default rootReducer