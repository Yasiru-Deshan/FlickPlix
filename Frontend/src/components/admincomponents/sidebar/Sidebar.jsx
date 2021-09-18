import './sidebar.css';
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	PlayCircleOutline,
	List,
	MailOutline,
	DynamicFeed,
	ChatBubbleOutline,
	WorkOutline,
	Report,
	AddToQueue,
	QueuePlayNext
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<Link to='/admin/movies' className='link'>
							<li className='sidebarListItem'>
								<PlayCircleOutline className='sidebarIcon' />
								Movies
							</li>
						</Link>
						<Link to='/admin/lists' className='link'>
							<li className='sidebarListItem'>
								<List className='sidebarIcon' />
								Lists
							</li>
						</Link>
						<Link to='/admin/newMovie' className='link'>
							<li className='sidebarListItem'>
								<AddToQueue className='sidebarIcon' />
								Add Movie
							</li>
						</Link>
						<Link to='/admin/newList' className='link'>
							<li className='sidebarListItem'>
								<QueuePlayNext className='sidebarIcon' />
								Add List
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
