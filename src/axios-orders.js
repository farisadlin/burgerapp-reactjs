import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-test-app-db03b.firebaseio.com/'
});

export default instance;