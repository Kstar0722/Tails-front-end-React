import AuthorizedContainer from 'containers/AuthorizedContainer'

// import Mock from './MockBackend/Mock'
import Profile from './Profile/Profile'
import EditProfile from './EditProfile/EditProfile'
import StepOne from './Lists/StepOne/StepOne'
import StepTwo from './Lists/StepTwo/StepTwo'
import StepThree from './Lists/StepThree/StepThree'
import StepFour from './Lists/StepFour/StepFour'

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
		},
		{
			path: '/step-one',
			component: StepOne
		},
		{
			path: '/step-two',
			component: StepTwo
		},
		{
			path: '/step-three',
			component: StepThree
		},
		{
			path: '/step-four',
			component: StepFour
		}
	]
}