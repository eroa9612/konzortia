import axios from 'axios';
import API from '../api/apiURL';

let response = [];

export default {
    async listMovie() {
        response = await axios.get(API.node + 'movie/list');
        return response.data;
    },

    async listClasification() {
        response = await axios.get(API.node + 'clasification/list');
        return response.data;
    },

    async addClasification(name) {
        response = await axios.post(API.node + 'clasification/add', {
            name: name
        });
        return response.data;
    },

    async updateClasification(id, name) {
        response = await axios.put(API.node + 'clasification/update', {
            _id: id,
            name: name
        });
        return response.data;
    },

    async deleteClasification(id) {
        response = await axios.delete(API.node + `clasification/delete?_id=${id}`);
        return response.data
    },

    async addMovie(name, director, clasification) {
        response = await axios.post(API.node + 'movie/add', {
            name,
            director,
            clasification
        });
        return response.data;
    },

    async updateMovie(id, name, director, clasification) {
        console.info(clasification)
        response = await axios.put(API.node + 'movie/update', {
            _id: id,
            name: name,
            director: director,
            clasification: clasification
        });
        return response.data;
    },

    async deleteMovie(id) {
        response = await axios.delete(API.node + `movie/delete?_id=${id}`);
        return response.data
    },

}