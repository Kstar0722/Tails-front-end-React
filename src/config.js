export default {
    endpoints: {
        // url: 'http://tails-api-dev.gpd2yfmmj5.us-west-2.elasticbeanstalk.com',
        url: 'http://localhost:3001',
        login: '/auth/signin',
        signup: '/auth/signup',
        forgot: '/api/auth/forgot_password',
        reset: '/api/auth/reset_password',
        userInfo: '/api/users/',
        changePass: '/api/users/',
        uerFood: '/api/user_diary_settings',
        getCountry: '/api/locations',
        listings: '/listings',
        profile: '/users',
        bids: '/bids'
    }
}