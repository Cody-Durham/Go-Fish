import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import RiverSelection from './RiverSelection'
import RiverWeather from './RiverWeather'



const Main = () => {
    return( 
        <div>
            <Switch>

                
                <Route path='/riverselection'>
                    <RiverSelection />
                </Route>
                <Link to='/riverselection'>
                    <button className='button'>Find your water weather</button>
                </Link>

            
                <Route path='/riverweather/:zip'
                    render={ (routerProps) => <RiverWeather {...routerProps} />}>
                    <RiverWeather />
                </Route> 
           
            </Switch>
        </div>
    )
};

export default Main