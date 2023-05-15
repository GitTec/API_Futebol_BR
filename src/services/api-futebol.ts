import axios from 'axios';
import { secrets } from '../constants/secrets'

const api = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        Authorization: `Bearer ${secrets.API_KEY}`
    }
})

export default api;