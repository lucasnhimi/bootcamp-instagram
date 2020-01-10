import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'text/plain;charset=utf-8',
    }
})

export default api;