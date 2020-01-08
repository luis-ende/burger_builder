import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-test-burger-6863c.firebaseio.com/'
});

export default instance;