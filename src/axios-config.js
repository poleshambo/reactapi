import axios from 'axios';

const instance = axios.create
({
     baseURL: "https://cors-anywhere.herokuapp.com/https://2019ncov.asia/api"
 });

export default instance;