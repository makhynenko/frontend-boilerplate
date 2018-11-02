import axios from 'axios';

export function getAll() {
    return axios.get('/api/adverts');
}
export function getById(id) {
    return axios.get(`/api/advert/${id}`);
}
