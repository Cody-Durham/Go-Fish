import React, { useState, useEffect } from 'react'

const rivers = ['Arkansas', 'Big Thompson', 'Blue River', 'Clear Creek', 'Colorado', 'Dream Stream', 'Eagle', 'San Juan', 'Yampa']

// const rivers = [
//     {name: 'Arkansas'}, 
//     {name: 'Big Thompson'}, 
//     {name: 'Blue River'}, 
//     {name: 'Clear Creek'}, 
//     {name: 'Colorado'}, 
//     {name: 'Dream Stream'}, 
//     {name: 'Eagle'}, 
//     {name: 'San Juam'},
// ]


const RiverSelection = () => {

    // console.log(rivers[0])
    const apiKey = 'aa935301c915ffe8a819f0d6177a4bf7'
    // const apiLocation = `props.match.params.name`
    const apiLocation = 'lakewood'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${apiLocation}&appid=${apiKey}`

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRiverInfo(data)
        // console.log(data.weather[0].description)
    }
    useEffect( () => {getData()}, [])
    const [riverInfo, setRiverInfo] = useState(null)
  

    const handleClick = (riverName) => {
        console.log(riverName)
        // console.log(riverInfo.name)
        // console.log(riverInfo.wind)
        // console.log(riverInfo.clouds)
    }

    const loaded = () => {
        return (
            <div>
                {
                    rivers.map( (item, index) => {
                        return (
                            <div>
                                <button
                                onClick={ () => handleClick(item)}
                                >{item}</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const loading = () => {
        return <h3>loading...page is not loading</h3>
    }

    return riverInfo ? loaded() : loading()
    
    
    
    
    
    
    
    
    
    
    
    
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