import NoAuth from './NoAuth'
import BrowseJobs from './BrowseJobs/BrowseJobs'
import FAQ from './FAQ/FAQ'
import HowItWorks from './HowItWorks/HowItWorks'
import Login from './Login/Login'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Support from './Support/Support'
import signup from './SignUp'
import AllListings from './Listings/AllListings'

import NewPage from './NewPage'

export default {
	component: NoAuth,
	childRoutes: [
		{
			path: '/browse-jobs',
			component: BrowseJobs
		},
		{
			path: '/faq',
			component: FAQ
		},
		{
			path: '/how-it-works',
			component: HowItWorks
		},
		{
			path: '/sign-in',
			component: Login
		},
		{
			path: '/forgot-password',
			component: ForgotPassword
		},
		{
			path: '/support',
			component: Support
		},
		{
			path: '/listings',
			component: AllListings
		},
		signup,
		NewPage
	]
}
