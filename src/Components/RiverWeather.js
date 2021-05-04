import React from 'react';
import {useState,useEffect} from 'react'


const RiverWeather = (props) => {
     const apiKey = 'aa935301c915ffe8a819f0d6177a4bf7'
     const apiLocation = props.match.params.zip
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${apiLocation}&appid=${apiKey}`
     
     const [riverInfo, setRiverInfo] = useState(null)

     
     const getData = async () => {
         const response = await fetch(url)
         const data = await response.json()
         setRiverInfo(data)
          console.log(data)
        }
        // console.log(riverInfo.weather[0].description)

     useEffect( () => {getData()}, [])
     
     const loaded = () => {
         return (
            //  <h1>test</h1>
             <section>

                <div className="river-name-container">
                    <h1>The River Name</h1>
                </div>
                <div id="river-image">
                    <img src="https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg" alt=""></img>
                </div>
                <div id="river-weather-container">
               
                <div>
                    <h3>box 1</h3>
                </div>
                <div>
                    <h3>box 2</h3>
                </div>
                </div>
                <div id="back-to-rivers-button-container">
                    <button className="button">Back to rivers</button>
                </div>

            </section>
          
            
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return riverInfo ? loaded() : loading()
    







    
    // return (
    //     <div>
    //         <h2>test</h2>
    //         {/* <Link to='riverWeather'> */}
    //         <Link to='/'>
    //         </Link>
    //     </div>
    // )
};

export default RiverWeather



