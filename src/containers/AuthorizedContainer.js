// The authorized container sends functions and props to the auth file found in '/routes/Auth/Auth.js'

import Auth from 'routes/Auth/Auth'
import { browserHistory } from 'react-router'

const mapDispatchToProps = (dispatch) => ({
  goToLoginPage: () => browserHistory.push('/sign-in')
})

const mapStateToProps = (state) => ({

})

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Auth)
