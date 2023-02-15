import { takeEvery, call, put } from 'redux-saga/effects';
import { getPosts } from "../../api";
import { setPostsAction } from "../actions/postsActions";
import { GET_POSTS } from "../constants";

export function* handlePosts(page: number) {
    try {
        const posts = yield call(getPosts, page)
        yield put(setPostsAction(posts))
    }
    catch (err) {
        console.log(err)
    }
}

export function* watchPostsSaga() {
    yield takeEvery(GET_POSTS, handlePosts)
}