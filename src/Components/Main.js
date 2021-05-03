import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import RiverSelection from './RiverSelection'



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
            
            </Switch>
        </div>
    )
};

export default Main