import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>
						<Link to='/'>FlickPlix</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
