import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import riversArr from '../riversArr'

const RiverSelection = () => {  
    return (
        <div className="river-container">
            {riversArr.map((river, index) => {
                // const {name} = river 
                const name = river.name
            
                return (
                    <Link to={`/riverweather/${river.name}`} class="link"> 
                        <div key={index}>
                        </div>
                        <h2 className='button'>{name}</h2>
                    </Link>)
            })}
        </div>
    )



    ///////////////// THIS IS USING STATIC ARR INSIDE THIS COMPONENT //////////
// const RiverSelection = () => {  
//     return (
//         <div className="river-container">
//             {rivers.map((river, index) => {
//                 // const {name} = river 
//                 const name = river.name
            
//                 return (
//                     <Link to={`/riverweather/${river.name}`} class="link"> 
//                         <div key={index}>
//                         </div>
//                         <h2 className='button'>{name}</h2>
//                     </Link>)
//             })}
//         </div>
//     )
    


///////////////// THIS IS USING ONCLICK not LINK (DELETE FOR FINAL PUSH) //////////
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
    
    

};

export default RiverSelection