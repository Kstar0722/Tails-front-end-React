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
    ],
    countries: [
        {value: 'US', text: 'United States'}
    ],
    states: [
        {value: 'AL', text: 'Alabama'},
        {value: 'AK', text: 'Alaska'},
        {value: 'AS', text: 'American Samoa'},
        {value: 'AZ', text: 'Arizona'},
        {value: 'AR', text: 'Arkansas'},
        {value: 'CA', text: 'California'},
        {value: 'CO', text: 'Colorado'},
        {value: 'CT', text: 'Connecticut'},
        {value: 'DE', text: 'Delaware'},
        {value: 'DC', text: 'District Of Columbia'},
        {value: 'FM', text: 'Federated States Of Micronesia'},
        {value: 'FL', text: 'Florida'},
        {value: 'GA', text: 'Georgia'},
        {value: 'GU', text: 'Guam'},
        {value: 'HI', text: 'Hawaii'},
        {value: 'ID', text: 'Idaho'},
        {value: 'IL', text: 'Illinois'},
        {value: 'IN', text: 'Indiana'},
        {value: 'IA', text: 'Iowa'},
        {value: 'KS', text: 'Kansas'},
        {value: 'KY', text: 'Kentucky'},
        {value: 'LA', text: 'Louisiana'},
        {value: 'ME', text: 'Maine'},
        {value: 'MH', text: 'Marshall Islands'},
        {value: 'MD', text: 'Maryland'},
        {value: 'MA', text: 'Massachusetts'},
        {value: 'MI', text: 'Michigan'},
        {value: 'MN', text: 'Minnesota'},
        {value: 'MS', text: 'Mississippi'},
        {value: 'MO', text: 'Missouri'},
        {value: 'MT', text: 'Montana'},
        {value: 'NE', text: 'Nebraska'},
        {value: 'NV', text: 'Nevada'},
        {value: 'NH', text: 'New Hampshire'},
        {value: 'NJ', text: 'New Jersey'},
        {value: 'NM', text: 'New Mexico'},
        {value: 'NY', text: 'New York'},
        {value: 'NC', text: 'North Carolina'},
        {value: 'ND', text: 'North Dakota'},
        {value: 'MP', text: 'Northern Mariana Islands'},
        {value: 'OH', text: 'Ohio'},
        {value: 'OK', text: 'Oklahoma'},
        {value: 'OR', text: 'Oregon'},
        {value: 'PW', text: 'Palau'},
        {value: 'PA', text: 'Pennsylvania'},
        {value: 'PR', text: 'Puerto Rico'},
        {value: 'RI', text: 'Rhode Island'},
        {value: 'SC', text: 'South Carolina'},
        {value: 'SD', text: 'South Dakota'},
        {value: 'TN', text: 'Tennessee'},
        {value: 'TX', text: 'Texas'},
        {value: 'UT', text: 'Utah'},
        {value: 'VT', text: 'Vermont'},
        {value: 'VI', text: 'Virgin Islands'},
        {value: 'VA', text: 'Virginia'},
        {value: 'WA', text: 'Washington'},
        {value: 'WV', text: 'West Virginia'},
        {value: 'WI', text: 'Wisconsin'},
        {value: 'WY', text: 'Wyoming'},
      ]
}
