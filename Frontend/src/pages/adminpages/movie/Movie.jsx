import { Link, useLocation, useHistory } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import './movie.css';
import { Publish } from '@material-ui/icons';
import { updateMovie } from '../../../context/movieContext/apiCalls';
import { MovieContext } from '../../../context/movieContext/MovieContext';

export default function Movie() {
	const location = useLocation();
	const newm = location.movie;
	const [movie, setMovie] = useState(newm);
	const { dispatch } = useContext(MovieContext);
	const history = useHistory();
	const handleChange = (e) => {
		const value = e.target.value;
		setMovie({ ...movie, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(movie);
		updateMovie(movie, dispatch);
		history.push('/admin/movies');
	};

	return (
		<>
			{movie != null ? (
				<div className='product'>
					<div className='productTitleContainer'>
						<h1 className='productTitle'>Movie</h1>
						<Link to='/admin/newMovie'>
							<button className='productAddButton'>Create</button>
						</Link>
					</div>
					<div className='productTop'>
						<div className='productTopRight'>
							<div className='productInfoTop'>
								<img
									src={movie.img}
									alt=''
									className='productInfoImg'
								/>
								<span className='productName'>
									{movie.title}
								</span>
							</div>
							<div className='productInfoBottom'>
								<div className='productInfoItem'>
									<span className='productInfoKey'>id:</span>
									<span className='productInfoValue'>
										{movie._id}
									</span>
								</div>
								<div className='productInfoItem'>
									<span className='productInfoKey'>
										genre:
									</span>
									<span className='productInfoValue'>
										{movie.genre}
									</span>
								</div>
								<div className='productInfoItem'>
									<span className='productInfoKey'>
										year:
									</span>
									<span className='productInfoValue'>
										{movie.year}
									</span>
								</div>
								<div className='productInfoItem'>
									<span className='productInfoKey'>
										limit:
									</span>
									<span className='productInfoValue'>
										{movie.limit}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='productBottom'>
						<form className='productForm' onSubmit={handleSubmit}>
							<div className='productFormLeft'>
								<label>Movie Title</label>
								<input
									type='text'
									placeholder={movie.title}
									onChange={handleChange}
									name='title'
								/>
								<label>Year</label>
								<input
									type='text'
									placeholder={movie.year}
									onChange={handleChange}
									name='year'
								/>
								<label>Genre</label>
								<input
									type='text'
									placeholder={movie.genre}
									onChange={handleChange}
									name='genre'
								/>
								<label>Limit</label>
								<input
									type='text'
									placeholder={movie.limit}
									onChange={handleChange}
									name='limit'
								/>
								{/* <label>Trailer</label>
								<input
									type='file'
									placeholder={movie.trailer}
								/>
								<label>Video</label>
								<input type='file' placeholder={movie.video} /> */}
							</div>
							<div className='productFormRight'>
								<div className='productUpload'>
									<img
										src={movie.img}
										alt=''
										className='productUploadImg'
									/>
									{/* <label for='file'>
										<Publish />
									</label> */}
									<input
										type='file'
										id='file'
										style={{ display: 'none' }}
									/>
								</div>
								<button className='productButton'>
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div>no movie selected</div>
			)}
		</>
	);
}
