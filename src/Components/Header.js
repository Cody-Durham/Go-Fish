import React from 'react'
import {Link} from 'react-router-dom'


const Header = (props) => {
    const darkFishLogo = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1619820542/Project%202_API%20Calls/GoFish_logo-01_apx6bm.png" alt="fishing logo" id="fish-logo"/>
    // const lightFishLogo = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620154675/Project%202_API%20Calls/GoFish_logo_LtGrey-01_y27m6m.png" alt="fishing logo" id="fish-logo" className=""/>
    // const darkFishLogoPNG = <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620156422/Project%202_API%20Calls/GoFish_logo-01_motasb.svg" alt="fishing logo" id="fish-logo"/>
    
    return( 
     <Link to={'/'}>
        <div className='header'>
        {/* <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1619820542/Project%202_API%20Calls/GoFish_logo-01_apx6bm.png" alt="fishing logo" id="fish-logo"/> */}
        {darkFishLogo}
        {/* <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620156422/Project%202_API%20Calls/GoFish_logo-01_motasb.svg" alt="fishing logo" id="fish-logo"/> */}
        {/* <hr className='header-line hidden'></hr> */}
        </div>
     </Link>

 )
};

export default Header