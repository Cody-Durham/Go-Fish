import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/HeaderDesktop.css'


const Header = (props) => {
    // const darkFishLogo = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1619820542/Project%202_API%20Calls/GoFish_logo-01_apx6bm.png" alt="fishing logo" id="fish-logo"/>
    
    return( 
     <Link to={'/'}>
        <div className='header'>
            {/* <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1619820542/Project%202_API%20Calls/GoFish_logo-01_apx6bm.png'></img> */}
            <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1629437882/Project%202_API%20Calls/GoFish_logo_Orange-01_qxgxcq.png'></img>
        </div>
     </Link>

 )
};

export default Header