import axios from 'axios'
import { cookies } from '../redux/reducers/setTokensReducer'

export const API_URL = 'http://rest-test.machineheads.ru'

const $axios = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

$axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${cookies.get('access_token')}`
    return config
})

$axios.interceptors.response.use(config => {
    return config
},
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401) {
            const token = new FormData()
            token.append('refresh_token', cookies.get('refresh_token'))
            const response = await axios.post(
                `${API_URL}/auth/token-refresh`,
                token,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    withCredentials: true
                }
            )
            cookies.set('access_token', response.data.access_token)
            cookies.set('refresh_token', response.data.refresh_token)
            return $axios.request(originalRequest)
        }

    }
)

export default $axios