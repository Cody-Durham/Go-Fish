import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import RiverSelection from './RiverSelection'
import RiverWeather from './RiverWeather'

const Main = () => {
    return( 
        <div>

            <Switch>
                <Route exact path='/'>
                    <div className='main-image'>
                        <img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1620093668/Project%202_API%20Calls/Fishing_Image_scaled_bur7an.jpg'></img>
                    </div>

                 <Link to='/riverselection' className='link'>
                    <button className='find-water-button'>Find your water weather
                            <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620098166/Project%202_API%20Calls/Water_Logo-01_sbtnuj.png" id="water-logo"></img>
                    </button>
                </Link>
                </Route>

                {/* LINK to show river buttons */}
                <Route path='/riverselection'>
                    <RiverSelection />
                </Route>
                    
            {/* ROUTE to show rivers with the corrisponding zipcode in URL*/}
                <Route path='/riverweather/:zip'
                    render={ (routerProps) => <RiverWeather {...routerProps} />}>
                </Route> 
            </Switch>
        </div>
    )
};

export default Main