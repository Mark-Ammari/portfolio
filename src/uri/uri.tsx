import axios from 'axios';

const API = "https://portfolio-a73bb.firebaseio.com"

export default axios.create({
    baseURL: API,
    headers: {
        "content-type": "application/json"
    }
})

