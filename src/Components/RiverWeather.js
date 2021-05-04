import React from 'react';
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'


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
             <div>
                {/* <h1>{riverInfo.name}</h1> */}
                <h2>TESTINGGGGGING</h2>
                <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1619666522/Project%202_API%20Calls/IMG_6573_b_ykghcx.jpg"></img>
            </div>
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