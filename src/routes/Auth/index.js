import AuthorizedContainer from 'containers/AuthorizedContainer'

// import Mock from './MockBackend/Mock'
import Profile from './Profile/Profile'
import Notification from './Notification/Notification'
import EditProfile from './EditProfile/EditProfile'
import StepOne from './Lists/StepOne/StepOne'
import StepTwo from './Lists/StepTwo/StepTwo'
import StepThree from './Lists/StepThree/StepThree'
import StepFour from './Lists/StepFour/StepFour'
import ReviewItem from './Profile/listings/ReviewItem'
export default {
	component: AuthorizedContainer,
	childRoutes: [
		{
      path: '/profile',
      component: Profile
    },
    {
      path: '/notification/:id',
      component: Notification
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
		},
		{
			path: '/profile/item-review',
			component: ReviewItem
		}
	]
}
