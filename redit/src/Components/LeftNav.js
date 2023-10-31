import React from 'react'
import "font-awesome/css/font-awesome.css";
import "./LeftNav.css"
import { BrowserRouter as Router, Link } from 'react-router-dom';

const LeftNav = () => {


  const Topics = [

    { Name: "Gaming", Link: "https://www.reddit.com/t/valheim/" },
    { Name: "Sports", Link: "https://www.reddit.com/t/premier_league/" },
    { Name: "Bussiness", Link: "https://www.reddit.com/t/spacex/" },
    { Name: "Crypto", Link: "https://www.reddit.com/t/bitcoin/" },
    { Name: "Television", Link: "https://www.reddit.com/t/last_week_tonight_with_john_oliver/" },
    { Name: "Celebrity", Link: "https://www.reddit.com/t/millie_bobby_brown/" },
    { Name: "Animals & Pets", Link: "https://www.reddit.com/t/animals_and_pets/" },
    { Name: "Anime", Link: "https://www.reddit.com/t/anime/" },
    { Name: "Art", Link: "https://www.reddit.com/t/art/" },
    { Name: "Cars & Motors Vehicles", Link: "https://www.reddit.com/t/cars_and_motor_vehicles/" },
    { Name: "Crafts & DIY", Link: "https://www.reddit.com/t/crafts_and_diy/" },
    { Name: "Fashion", Link: "https://www.reddit.com/t/fashion/" },
    { Name: "Food & Drink", Link: "https://www.reddit.com/t/food_and_drink/" },
    { Name: "History", Link: "https://www.reddit.com/t/history/" },
    { Name: "Hobbies", Link: "https://www.reddit.com/t/hobby/" },
    { Name: "Movies", Link: "https://www.reddit.com/t/movie/" },
    { Name: "Place", Link: "https://www.reddit.com/t/place/" },

  ]
  return (
    <Router>
      <div className='Side-Container'>
        <div className='sideNav'>
          <div className='First'>
            <li><Link className='Link' to="/">HOME</Link></li>
            <li><Link className='Link' to="/">Popular</Link></li>
          </div>
          <hr />
          <div className='Topics-Menu' >
            {Topics.map((Topics, index) => {
              return <li><a className='Link' target='blank' href={Topics.Link} key={index}>{Topics.Name}</a></li>

            })
            }
          </div>
        </div>
      </div>
    </Router>
  )
}

export default LeftNav
