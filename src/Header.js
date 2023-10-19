import React from 'react';
import './Header.css'
import image from './shopper_logo.jpg'


function Header() {
  return (
    <div className='header'>
      <img
     
      src = {image} width='70px' height= '60px'alt='noo1'
      />

      <div className = "header_Search">
      <input className="header_searchInput" type="text" />
      </div>
      {/*logo*/}

      <div className="header_nav">
        <div className='header_option'>
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
        </div>


         <div className='header_option'>
         <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">Orders</span>
         </div>

        <div className='header_option'>
        <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>

</div></div>

  )
}

export default Header
