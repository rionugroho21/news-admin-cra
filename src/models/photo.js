import axios from 'axios';

export const getPhoto = (id) => {
	return axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
            albumId: id
        }
    })
}