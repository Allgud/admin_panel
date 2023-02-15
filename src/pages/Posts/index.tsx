import { useEffect } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { GET_POSTS } from "../../redux/constants"
import PostList from "../../components/PostList"
import AddPostBlock from "../../components/AddPostBlock"
import * as styles from './styles'

const Posts = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch({ type: GET_POSTS })
    }, [dispatch])

    return (
        <div style={styles.postsWrapper}>
            <AddPostBlock />
            <PostList />
        </div>
    )
}

export default Posts