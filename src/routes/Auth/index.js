import AuthorizedContainer from 'containers/AuthorizedContainer'

// import Mock from './MockBackend/Mock'
import Profile from './Profile/Profile'

export default {
	component: AuthorizedContainer,
	childRoutes: [
		{
			path: '/profile',
			component: Profile
		}
	]
}