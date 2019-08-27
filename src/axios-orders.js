import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-e6a56.firebaseio.com/'
})

export default instance
