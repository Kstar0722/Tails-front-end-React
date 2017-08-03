import AuthorizedContainer from 'containers/AuthorizedContainer'

// import Mock from './MockBackend/Mock'
import Profile from './Profile/Profile'
import EditProfile from './EditProfile/EditProfile'

export default {
	component: AuthorizedContainer,
	childRoutes: [
		{
			path: '/profile',
			component: Profile
		},
		{
			path: '/profile/edit',
			component: EditProfile
		}
	]
}