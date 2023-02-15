import axios from "axios";
import { FormValues } from "../redux/types";
import { API_URL } from "./axios";
import $axios from "./axios";

export const getTokens = async (data: FormValues) => {
    try {
        const formdata = new FormData()
        formdata.append('email', data.email)
        formdata.append('password', data.password)
        const response = await axios.post(
            `${API_URL}/auth/token-generate`,
            formdata,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )

        return response.data
    } catch (err) {
        console.log(err)
    }

}

export const getPosts = async (page = 1) => {
    const response = await $axios.get('/manage/posts', { params: { page } })
    return response.data
}