import Dog from 'assets/dog.svg'
import Horse from 'assets/horse.svg'
import Cow from 'assets/cow.svg'
// import Goat from 'assets/goat.svg'
import Cat from 'assets/cat.svg'
import Pig from 'assets/pig.svg'
// import Bird from 'assets/bird.svg'

export default {
    endpoints: {
        url: (process.env.TAILS_API_URL) ? process.env.TAILS_API_URL : (process.env.NODE_ENV == 'production') ? 'http://tails-api-dev.gpd2yfmmj5.us-west-2.elasticbeanstalk.com' : 'http://tails-api-dev.gpd2yfmmj5.us-west-2.elasticbeanstalk.com',
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
        bids: '/bids',
        listings_animals: '/listing_animals',
        animal_image: '/animal_images'
    },
    stripe: {
        public_key: process.env.STRIPE_PUBLIC || ''
    },
    breeds: ['Dog', 'Horse', 'Cow', 'Goat', 'Cat', 'Bird', 'Pig'],
    animals: [
        {
            name: 'Cat',
            breed: 'Cat',
            url: Cat
        },
        {
            name: 'Cow',
            breed: 'Cow',
            url: Cow
        },
        {
            name: 'Dog',
            breed: 'Dog',
            url: Dog
        },
        {
            name: 'Horse',
            breed: 'Horse',
            url: Horse
        },
        
        // {
        //     name: 'Goat',
        //     breed: 'Goat',
        //     url: Goat
        // },
        
        // {
        //     name: 'Bird',
        //     breed: 'Bird',
        //     url: Bird
        // },     
        {
            name: 'Pig',
            breed: 'Pig',
            url: Pig
        },     
    ]
}
