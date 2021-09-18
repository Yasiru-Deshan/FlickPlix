import axios from 'axios';
import {
	createMovieFailure,
	createMovieStart,
	createMovieSuccess,
	deleteMovieFailure,
	deleteMovieStart,
	deleteMovieSuccess,
	getMoviesFailure,
	getMoviesStart,
	getMoviesSuccess,
	updateMovieFailure,
	updateMovieStart,
	updateMovieSuccess
} from './MovieActions';
import { getToken } from '../../components/mainpages/utils/common';

export const getMovies = async (dispatch) => {
	dispatch(getMoviesStart());
	try {
		const res = await axios.get('http://localhost:8070/api/movies', {
			headers: {
				Authorization: getToken()
			}
		});
		dispatch(getMoviesSuccess(res.data));
	} catch (err) {
		dispatch(getMoviesFailure());
	}

};

//create
export const createMovie = async (movie, dispatch) => {

	dispatch(createMovieStart());
	try {
		const res = await axios.post(
			'http://localhost:8070/api/movies',
			movie,
			{
				headers: {
					Authorization: getToken()
				}
			}
		);
		dispatch(createMovieSuccess(res.data));
	} catch (err) {
		dispatch(createMovieFailure());
	}
};

//update
export const updateMovie = async (movie, dispatch) => {
	dispatch(updateMovieStart());
	try {
		const res = await axios.put(
			`http://localhost:8070/api/movies/${movie._id}`,
			movie,
			{
				headers: {
					Authorization: getToken()
				}
			}
		);
		dispatch(updateMovieSuccess(res.data));
	} catch (err) {
		dispatch(updateMovieFailure());
	}

};

//delete
export const deleteMovie = async (id, dispatch) => {

	dispatch(deleteMovieStart());
	try {
		await axios.delete('http://localhost:8070/api/movies/' + id, {
			headers: {
				Authorization: getToken()
			}
		});
		dispatch(deleteMovieSuccess(id));
	} catch (err) {
		dispatch(deleteMovieFailure());
	}

};
