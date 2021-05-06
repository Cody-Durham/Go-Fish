import React from 'react';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import riversArr from '../riversArr'

// setRiverInfo({ weather: data, river: riverInfo })

const RiverWeather = (props) => {
    const apiKey = 'aa935301c915ffe8a819f0d6177a4bf7'
    const apiLocation = props.match.params.zip
    // console.log('test', props)
    // const apiWeather = props.match.params.main.temp
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiLocation},us&appid=${apiKey}`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${apiLocation},us&units=imperial&appid=${apiKey}`
    
    const [riverInfo, setRiverInfo] = useState(null)
    const [riverPic, setRiverPic] = useState(null)
    

    const filterPic = riversArr.filter( (river) => {
        // console.log('image test')
        return (river.zip === props.match.params.zip)
    })
    

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setRiverInfo(data)
    }
    useEffect( () => {getData()}, [])
    
    
    const loaded = (props) => {
        // console.log(riverInfo);
        
        const temp = riverInfo.main.temp;
        const wind = riverInfo.wind.speed;

         return (
             <section>
                <div className="river-name-container">
                    {/* <p> City Location:</p> */}
                    <h3>{riverInfo.name}</h3>
                </div>
                <div id="city-loacation">
                     <p>City Location:</p>
                 </div>
             
                <div id="river-image">
                    <img src={filterPic[0].img} alt=""></img>
                    {/* <img src="https://captainzipline.com/wp-content/uploads/captain-zipline-ecology-arkansas-river.jpg" alt=""></img> */}
                    {/* <img src="{riverInfo.img}" alt=""></img> */}
                </div>
                <div id="weather-container">
               
                <div>
                <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620339339/Project%202_API%20Calls/Sunny-01_iaqfif.png" alt="" id='tempature-icon'></img>
                    <h3>TEMP: {temp}</h3>
                </div>
                <div>
                <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1620339683/Project%202_API%20Calls/Windy-01_zjb8jc.png" alt="" id='wind-icon'></img>
                    <h3>WIND: 0{wind}</h3>
                </div>

             
                </div>
                <Link to={'/riverselection'}>
                    <div id="back-to-rivers-button-container">
                        <button className="button">Back to rivers</button>
                    </div>
                </Link>
                <Link to={'/'}>
                    <div id="back-to-home-button-container">
                        <button className="button">Back to the truck</button>
                    </div>
                </Link>


            </section>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return riverInfo ? loaded() : loading()
};

export default RiverWeather



