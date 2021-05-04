import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

// const rivers = ['Arkansas', 'Big Thompson', 'Blue River', 'Clear Creek', 'Colorado', 'Dream Stream', 'Eagle', 'San Juan', 'Yampa']

const rivers = [
    {name: 'Arkansas', zip: '81201' }, 
    {name: 'Big Thompson', zip: '80515'}, 
    {name: 'Blue River', zip: '84204'}, 
    {name: 'Clear Creek', zip: '80403'}, 
    {name: 'Colorado', zip: '80459'}, 
    {name: 'Dream Stream', zip: '80827'}, 
    {name: 'Eagle', zip: '81657'}, 
    {name: 'San Juan', zip: '81147'},
]
// console.log(rivers.zip);


const RiverSelection = () => {

    return <div>
    {rivers.map((river, index) => {
        const {name} = river 
        
        
        return (<Link to={`/riverweather/${river.zip}`}>
                <div
                key={index}>
                </div>
                <h2>{name}</h2>
        </Link>)
    })}
</div>

    // return <div>
    //     {rivers.map((thing, index) => {
    //         const {name} = thing 
            
    //         return (<Link to={`/riverweather/${thing.zip}`}>
    //                 <div
    //                 key={index}>
    //                 </div>
    //                 <h2>{name}</h2>
    //         </Link>)
    //     })}
    // </div>
      
    
    
    // const handleClick = (riverName) => {
    //     console.log(riverName)
    // }


    // const loaded = () => {
    //     return (
    //         <div>
    //             {
    //                 rivers.map( (item, index) => {
    //                     return (
    //                         <div>
    //                             <button
    //                             className='button'
    //                             onClick={ () => handleClick(item)}
    //                             >{item}</button>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }

    // const loading = () => {
    //     return <h3>loading...page is not loading</h3>
    // }

    // return riverInfo ? loaded() : loading()
    
    
    
    
    
    
    
    
    
    
    
    
// _______________________________________________________________________________________________



    // return (
    //     <div className='river-buttons'>
    //         <button className="button" onClick={test}>{rivers[0]}</button>
    //         {/* <button className="button" onClick={testing}>{rivers[0]}</button> */}
    //         {/* <button className="button">{rivers[0].name}</button> */}
    //         {/* <button className="button">{rivers[2]}</button>
    //         <button className="button">{rivers[3]}</button>
    //         <button className="button">{rivers[4]}</button>
    //         <button className="button">{rivers[5]}</button>
    //         <button className="button">{rivers[6]}</button>
    //         <button className="button">{rivers[7]}</button>
    //         <button className="button">{rivers[8]}</button> */}
    //     </div>
    // )
};

export default RiverSelection





  // const check = rivers.map( (item, index) => {
    //     console.log(item)
    //     return (
    //         <div>
    //             {/* <h1>thing inside here?</h1> */}
    //             <h1>{item}</h1>
    //             {/* <button>{item}</button> */}
    //         </div>
    //     )
    // })