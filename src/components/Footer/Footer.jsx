import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_content">
        <div className="footer_content_left">
            <img src={assets.logo} alt=''/>
            <p>Food prices are approaching an all-time high. Climate change affecting food production has aided this increase over time.Food prices and pushed global food inflation sharply. With no end seen to the war and with steep rises in fertiliser prices, it is anticipated that food prices may increase even further.</p>
            <div className="footer_social_icons">
                <a href="https://www.facebook.com/" target='_blank'><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://twitter.com/" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://in.linkedin.com/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
            </div>
         </div>
        <div className="footer_content_center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/term">Terms</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
         </div>
         <div className="footer_content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-254-854-9632</li>
              <li>contact@tomato.com</li>
            </ul>
         </div>    
      </div> 
      <hr/>
      <p className='footer_copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
