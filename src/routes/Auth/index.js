import AuthorizedContainer from 'containers/AuthorizedContainer'

import Mock from './MockBackend/Mock'

export default {
	component: AuthorizedContainer,
	childRoutes: [
		{
			path: '/mock',
			component: Mock
		}
	]
}