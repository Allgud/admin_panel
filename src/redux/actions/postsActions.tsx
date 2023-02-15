import { SET_POSTS, GET_POSTS } from "../constants";
import { IPost } from "../types";

export const getPostsAction = (payload: number) => {
    return {
        type: GET_POSTS,
        payload
    }
}

export const setPostsAction = (payload: Array<IPost>) => {
    return {
        type: SET_POSTS,
        payload
    }
}