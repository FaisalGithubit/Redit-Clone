import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='H-Container'>
    <div className='Header'>
        <div className='Left'>
      <div className='Logo'>
          <img src='https://clipart-library.com/images_k/transparent-reddit/transparent-reddit-14.png'/>
          <h3>reddit</h3>
      </div>
      </div> 
      <div className='Center'>
            <i className='fa fa-search'></i>
          <input type='text' placeholder='Search Here'/>
        </div>
      <div className='Right'>
        <span>
          <i className='fa fa-qrcode'></i>
          <h4>Get App</h4>
          </span>
          <h3>Login</h3>
        
        </div>

    </div>
    </div>
  )
}

export default Header
