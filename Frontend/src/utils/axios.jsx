import axios from 'axios';

export const MyApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/reservation'
});