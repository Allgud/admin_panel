import { SET_POSTS } from "../constants";
import type { IPost } from "../types";

type PostActionType = {
    type: string,
    payload: PostsState
}

export type PostsState = {
    posts: Array<IPost>
}

const initialState: PostsState = {
    posts: []
}

const postsReducer = (state = initialState, action: PostActionType) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default: return state
    }
}

export default postsReducer