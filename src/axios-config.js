import axios from 'axios';

const instance = axios.create
({
     baseURL: 'https://2019ncov.asia/api'
 });

export default instance;