import axios from 'axios';

export const getComment = (id) => {
	return axios.get('https://jsonplaceholder.typicode.com/comments')
}