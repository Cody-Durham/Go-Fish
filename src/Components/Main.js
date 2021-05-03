import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import RiverSelection from './RiverSelection'



const Main = () => {
    return( 
        <div>
            <Switch>

                <Route path='/riverSelection'>
                    <RiverSelection />
                </Route>
                <Link to='/riverSelection'>
                    <button>Find your water weather</button>
                </Link>
            
            </Switch>
        </div>
    )
};

export default Main