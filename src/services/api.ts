import axios from 'axios'

const apiNews = axios.create({
    baseURL: 'http://localhost:3001/'
})


export default apiNews