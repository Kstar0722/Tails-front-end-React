// We only need to import the modules necessary for initial render
import NormalLayout from '../layouts/Main/NormalLayout'
import Home from './Home'

// The container for the unauthorized pages
import NoAuth from './NoAuth'

// The container for the authorized pages -- Will be in the Authorized Layout
import Auth from './Auth'

import * as urlGenerator from './urlgenerator'

/*  Note: Instead of using JSX, we recommend using react-router
PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path        : '/',
    component   : NormalLayout,
    indexRoute  : Home,
    childRoutes : [
        NoAuth,
        Auth, // These will redirect to login if need be
    ]
})


// // -------------------------------------------
// // This is the create 
// // routes for the authorized
// // container
// // -------------------------------------------

// export const createRoutes = (store) => ({
//   path        : '/',
//   component   : AuthorizedLayout,
//   indexRoute  : Home,
//   childRoutes : [
//     AuthorizedContainer,
//   ]
// })


// -------------------------------------------

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
using getChildRoutes with the following signature:

getChildRoutes (location, cb) {
  require.ensure([], (require) => {
    cb(null, [
      // Remove imports!
      require('./Counter').default(store)
    ])
  })
}

However, this is not necessary for code-splitting! It simply provides
an API for async route definitions. Your code splitting should occur
inside the route `getComponent` function, since it is only invoked
when the route exists and matches.
*/

export default createRoutes
