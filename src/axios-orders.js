import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5dc8e.firebaseio.com/'
});

export default instance;