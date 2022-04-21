import IMG from '../../assets/portfolioExample.jpg'
import socialNetwork from '../../assets/socialNetwork.png';
import yardSale from '../../assets/yardSale.png';
import quiz from '../../assets/quiz.png';
import restCountries from '../../assets/restCountries.png';
import crypto from '../../assets/crypto.png';
import {DiReact} from 'react-icons/di';
import {DiCss3} from 'react-icons/di';

export const data = [
    {
      id: 1,
      image: socialNetwork,
      title: 'Social Network Landing',
      tecnologies: "Social Network Landing created using React and Material UI",
      github: 'https://github.com/ElDev1/social_network_landing',
      demo: 'https://social-network-landing.vercel.app/' 
    },
    {
        id: 2,
        image: yardSale,
        title: 'Yard Sale App',
        tecnologies:"App created as a project for Platzi's React course. the goal is to show a client interface that consumes an API with products to sell",
        github: 'https://github.com/ElDev1/shop_app',
        demo: 'https://shop-app-three.vercel.app/' 
      },
      {
        id: 3,
        image: quiz,
        title: 'Quiz Game',
        tecnologies:"Simple quiz game created using JS vanilla and OOP paradigm",
        github: 'https://github.com/ElDev1/quiz_game',
        demo: 'https://www.youtube.com/watch?v=_S7WEVLbQ-Y&ab_channel=FicLord' 
      },
      {
        id: 4,
        image: restCountries,
        title: 'Rest Countries Challenge',
        tecnologies:"My solution for Frontend Mentor Challenge rest-countries using React",
        github: 'https://github.com/ElDev1/rest-countries',
        demo: 'https://rest-countries-beta.vercel.app/' 
      },
      {
        id: 5,
        image: crypto,
        title: 'Crypto App',
        tecnologies:"App to show data from different API's about cryptocurrencies and cryptomarkets",
        github: 'https://github.com/ElDev1/crypto_app',
        demo: 'https://crypto-app-opal-six.vercel.app/' 
      },
  ]