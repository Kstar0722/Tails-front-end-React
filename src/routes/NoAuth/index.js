import NoAuth from './NoAuth'
import BrowseJobs from './BrowseJobs/BrowseJobs'
import FAQ from './FAQ/FAQ'
import HowItWorks from './HowItWorks/HowItWorks'
import Login from './Login/Login'
import Support from './Support/Support'

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
			path: '/support',
			component: Support
		}
	]
}