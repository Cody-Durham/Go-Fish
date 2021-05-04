import React from 'react';
import {useState,useEffect} from 'react'


const RiverWeather = (props) => {

    //  // console.log(rivers[0])
     const apiKey = 'aa935301c915ffe8a819f0d6177a4bf7'
     const apiLocation = props.match.params.name
    //  const apiLocation = 'lakewood'
     const url = `http://api.openweathermap.org/data/2.5/weather?q=${apiLocation}&appid=${apiKey}`
 
     const getData = async () => {
         const response = await fetch(url)
         const data = await response.json()
         setRiverInfo(data)
        //  console.log(data.weather[0].description)
     }


     useEffect( () => {getData()}, [])
     const [riverInfo, setRiverInfo] = useState(null)

    
    return (<h2>test</h2>
        // <>
        // <div>RiverWeather</div>
        // <button>testing</button>
        // <h2></h2>
        // </>
    )
};

export default RiverWeather